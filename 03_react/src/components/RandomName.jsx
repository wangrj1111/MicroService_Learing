import { useState } from "react";
const RandomName = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Fiona",
    "George",
    "Hannah",
    "Ivan",
    "Judy",
    "Kevin",
    "Lily",
    "Mike",
    "Nancy",
    "Oliver",
    "Peter",
  ];
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const generaName = () => {
    setName(names[Math.floor(Math.random() * names.length)]);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{name || "点击生成一个名字"}</h1>
      <button onClick={generaName}>生成一个名字</button>
      <p>生成次数：{count}</p>
    </div>
  );
};

export default RandomName;
