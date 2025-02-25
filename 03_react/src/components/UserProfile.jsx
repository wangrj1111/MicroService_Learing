const UserProfile = ({ name, age, onAgeChange }) => {
  return (
    <div>
      <h2>用户信息</h2>
      <h1>name:{name}</h1>
      <p>age:{age}</p>
      <button onClick={onAgeChange}>增加年龄</button>
    </div>
  );
};
export default UserProfile;
