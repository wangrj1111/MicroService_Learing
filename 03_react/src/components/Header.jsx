import { useState } from "react";
import { SettingOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "首页",
    key: "mail",
    icon: <HomeOutlined />,
  },
  {
    label: "邮箱",
    key: "app",
    icon: <MailOutlined />,
  },
  {
    label: "设置",
    key: "setting",
    icon: <SettingOutlined />,
  },
];

const background = {
  backgroundColor: "#f0f2f5",
};
const Header = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      style={background}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
