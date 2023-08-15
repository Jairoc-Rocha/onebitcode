import { useState } from "react";

function ListRender() {
  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Pedro", age: 20 },
    { id: 3, name: "João", age: 19 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* 6 - previous state */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
}

export default ListRender;
