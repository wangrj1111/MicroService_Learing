import { useState } from "react";
import RegistForm from "./RegistForm"; // 引入子组件

const RegistPage = () => {
  // 状态用于存储提交的数据
  const [formData, setFormData] = useState(null);

  // 处理表单提交的函数
  const handleFormSubmit = (data) => {
    setFormData(data); // 更新状态，存储提交的数据
  };

  return (
    <div>
      <h1>用户注册</h1>
      <RegistForm onSubmit={handleFormSubmit} />{" "}
      {/* 将 handleFormSubmit 传递给子组件 */}
      {formData && (
        <div>
          <h2>提交的数据：</h2>
          <p>姓名：{formData.name}</p>
          <p>邮箱：{formData.email}</p>
        </div>
      )}
    </div>
  );
};

export default RegistPage;
