const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const { NacosNamingClient } = require("nacos"); // 引入 Nacos 客户端库

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

// ====================== 数据库配置 ======================
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "wangruijiang123w",
  database: "user_center",
  waitForConnections: true,
  connectionLimit: 10,
});

// ====================== Nacos 客户端配置 ======================
const logger = {
  info: (msg) => console.log(`INFO: ${msg}`),
  error: (msg) => console.error(`ERROR: ${msg}`),
  warn: (msg) => console.warn(`WARN: ${msg}`),
};

const nacosClient = new NacosNamingClient({
  serverList: "localhost:8848", // Nacos 服务器地址
  namespace: "public",
  //账号密码
  username: "nacos",
  password: "nacos",
  rotate: true, // 是否轮询服务器
  logLevel: "info", // 日志级别
  logger: logger, // 日志记录器
});

// ====================== 注册服务到 Nacos ======================
async function registerToNacos() {
  try {
    await nacosClient.registerInstance("node-service", {
      ip: "localhost", // 若部署在远程，替换为实际 IP（如 192.168.1.100）
      port: PORT, // 与服务启动端口一致
      clusterName: "DEFAULT",
    });
    console.log("✅ 服务成功注册到 Nacos");
  } catch (err) {
    console.error("❌ Nacos 注册失败:", err.message);
    if (err.code === "ECONNREFUSED") {
      console.log("--- 可能原因：Nacos 未启动或地址错误！");
    }
  }
}

// ====================== 业务路由 ======================
// 查所有数据
app.get("/user", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM t_user");
  res.json(rows);
});

// 查单个数据
app.get("/user/:id", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM t_user WHERE id = ?", [
    req.params.id,
  ]);
  res.json(rows[0] || {});
});

// 增
app.post("/user", async (req, res) => {
  const { name, description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO t_user (name, description) VALUES (?, ?)",
    [name, description]
  );
  res.json({ id: result.insertId, ...req.body });
});

// 删
app.delete("/user/:id", async (req, res) => {
  await pool.query("DELETE FROM t_user WHERE id = ?", [req.params.id]);
  res.json({ message: "Item deleted" });
});

// 改
app.put("/user/:id", async (req, res) => {
  const { name, description } = req.body;
  await pool.query("UPDATE t_user SET name = ?, description = ? WHERE id = ?", [
    name,
    description,
    req.params.id,
  ]);
  res.json({ id: req.params.id, ...req.body });
});

// ====================== 启动服务并注册 ======================
app.listen(PORT, async () => {
  console.log(`🚀 Node.js 服务运行在 http://localhost:${PORT}`);
  await registerToNacos(); // 服务启动后立即注册到 Nacos
});
