const Footer = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        position: "fixed", // 固定在页面底部
        bottom: 0, // 距离底部 0
        left: 0, // 距离左侧 0
        right: 0, // 距离右侧 0，宽度占满屏幕
        height: "60px", // 设置高度
        backgroundColor: "#333", // 背景颜色
        color: "#fff", // 文字颜色
        display: "flex", // 使用 flex 布局
        justifyContent: "center", // 水平居中
        alignItems: "center", // 垂直居中
        zIndex: 10, // 确保在其他内容之上
      }}
    >
      Footer
    </div>
  );
};

export default Footer;
