const { NacosNamingClient } = require("nacos2");
const app = require("./app");

const nacosClient = new NacosNamingClient({
  serverAddr: "127.0.0.1:8848",
  namespace: "public",
  logger: console,
  username: "nacos", // 确保用户名正确
  password: "nacos", // 确保密码正确
});

// 注册服务
async function registerService() {
  try {
    await nacosClient.ready();
    console.log("Nacos client is ready"); // 确保看到这条日志
    await nacosClient.registerInstance(
      "node-service", // 服务名
      {
        ip: "127.0.0.1", // 实例 IP
        port: 3000, // 实例端口
        healthy: true,
        metadata: {
          version: "1.0.0",
        },
      }
    );
    console.log("Service registered to Nacos");
  } catch (err) {
    console.error("Registration failed:", err);
    process.exit(1);
  }
}

// 启动 Express 并注册服务
app.on("listening", () => {
  registerService().catch((err) => {
    console.error("Registration failed:", err);
    process.exit(1);
  });
});

// 优雅下线处理
process.on("SIGINT", async () => {
  await nacosClient.deregisterInstance("node-service", "127.0.0.1", 3000);
  console.log("Service deregistered");
  process.exit();
});

async function discoverService() {
  const instances = await nacosClient.getAllInstances("node-service");
  console.log("Service instances:", instances);
}
