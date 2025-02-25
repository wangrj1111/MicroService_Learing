import Input from "./input";
import { useState } from "react";

const InputParent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <Input onInputChange={handleInputChange} />
      <p>输入的值：{inputValue}</p>
    </div>
  );
};
export default InputParent;
