const StudentInfo = ({ name, age, avatar, sex }) => {
  return (
    <div>
      <h1>Student Info</h1>
      <p>
        Name: <strong>{name}</strong>
      </p>
      <p>
        Age: <strong>{age}</strong>
      </p>
      <p>
        avatar: <img src={avatar} alt="" />
      </p>
      <p>
        sex: <strong>{sex}</strong>
      </p>
    </div>
  );
};

export default StudentInfo;
