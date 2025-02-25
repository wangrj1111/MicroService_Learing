const Input = ({ onInputChange }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="请输入..."
      />
    </div>
  );
};
export default Input;
