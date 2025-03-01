import atexit
from flask import Flask, jsonify, request, render_template
import mysql.connector
from nacos import NacosClient

app = Flask(__name__)

# ========================= MySQL 配置 =========================
DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "wangruijiang123w",
    "database": "user_center"
}

def get_db_connection():
    return mysql.connector.connect(**DB_CONFIG)

# ========================= Nacos 配置 =========================
NACOS_CONFIG = {
    "host": "localhost",          # Nacos服务器地址
    "port": 8848,
    "namespace": "public",
    "service_name": "python-service",
    "group_name": "DEFAULT_GROUP",
    "username": "nacos",          # Nacos用户名
    "password": "nacos"           # Nacos密码
}

# 初始化Nacos客户端
try:
    nacos_client = NacosClient(
        server_addresses=f"{NACOS_CONFIG['host']}:{NACOS_CONFIG['port']}",
        namespace=NACOS_CONFIG['namespace'],
        username=NACOS_CONFIG['username'],
        password=NACOS_CONFIG['password']
    )
    print("✅ Nacos客户端初始化成功")
except Exception as e:
    print(f"❌ Nacos客户端初始化失败: {str(e)}")
    raise  # 抛出异常阻止服务启动

# ========================= 服务注册逻辑 =========================
def register_to_nacos():
    print("✅ register_to_nacos() 函数被调用")
    try:
        instance = {
            "ip": "127.0.0.1",  # 服务IP（固定）
            "port": 5000,      # 服务端口
            "metadata": {"version": "1.0"}
        }
        print(f"✅ 准备注册服务: {instance}")
        # 注册服务实例
        nacos_client.add_naming_instance(
            service_name=NACOS_CONFIG['service_name'],
            ip=instance['ip'],
            port=instance['port'],
            group_name=NACOS_CONFIG['group_name'],
            metadata=instance['metadata']
        )
        print("✅ 服务成功注册到Nacos")
    except Exception as e:
        print(f"❌ 服务注册失败: {str(e)}")
        raise  # 抛出异常阻止服务启动

# ========================= 数据查询接口 =========================
@app.route('/shares', methods=['GET'])
def get_shares():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM t_share")
        return jsonify({"data": cursor.fetchall(), "code": 200})
    except Exception as e:
        return jsonify({"error": str(e), "code": 500}), 500
    finally:
        cursor.close()
        conn.close()

# 添加数据
@app.route('/shares', methods=['POST'])
def add_share():
    try:
        data = request.json
        name = data.get('name')
        status = data.get('status', 'active')

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO t_share (name, status) VALUES (%s, %s)", (name, status))
        conn.commit()

        return jsonify({"message": "Data added successfully", "code": 200}), 200
    except Exception as e:
        return jsonify({"error": str(e), "code": 500}), 500
    finally:
        cursor.close()
        conn.close()

# 更新数据
@app.route('/shares/<int:id>', methods=['PUT'])
def update_share(id):
    try:
        data = request.json
        name = data.get('name')
        status = data.get('status')

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("UPDATE t_share SET name = %s, status = %s WHERE id = %s", (name, status, id))
        conn.commit()

        return jsonify({"message": "Data updated successfully", "code": 200}), 200
    except Exception as e:
        return jsonify({"error": str(e), "code": 500}), 500
    finally:
        cursor.close()
        conn.close()

# 删除数据
@app.route('/shares/<int:id>', methods=['DELETE'])
def delete_share(id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM t_share WHERE id = %s", (id,))
        conn.commit()

        return jsonify({"message": "Data deleted successfully", "code": 200}), 200
    except Exception as e:
        return jsonify({"error": str(e), "code": 500}), 500
    finally:
        cursor.close()
        conn.close()

# ========== 页面相关 ==========

@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():
    return render_template('index.html')

# ========================= 服务注销逻辑 =========================
@atexit.register
def deregister_from_nacos():
    try:
        print("✅ 准备注销服务: 127.0.0.1:5000")
        nacos_client.remove_naming_instance(
            service_name=NACOS_CONFIG['service_name'],
            ip="127.0.0.1",
            port=5000,
            group_name=NACOS_CONFIG['group_name']
        )
        print("✅ 服务成功从Nacos注销")
    except Exception as e:
        print(f"❌ 服务注销失败: {str(e)}")

# ========================= 启动服务 =========================
def main():
    try:
        register_to_nacos()  # 确保在app.run()之前调用
        print("✅ 服务注册完成，启动Flask应用")
        app.run(host='0.0.0.0', port=5000, debug=False)  # 生产环境关闭debug
    except Exception as e:
        print(f"❌ 服务启动失败: {str(e)}")
        raise  # 抛出异常阻止服务启动

if __name__ == '__main__':
    main()