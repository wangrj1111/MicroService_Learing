import { useState } from "react";

const RegistForm = ({ onSubmit }) => {
  // 状态用于存储输入框的值
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 提交表单时触发
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表单默认提交行为
    onSubmit({ name, email }); // 调用父组件传递的 onSubmit 函数，传递数据
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>姓名：</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>邮箱：</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">提交</button>
    </form>
  );
};

export default RegistForm;
