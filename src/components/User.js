import { useState } from "react";
import { UserAddOutlined } from "@ant-design/icons"; // siempre importar el icono
import '../style/App.css';

const initialUser = [
  { name: "Josue", lastname: "Singaña" },
  { name: "Jazmin", lastname: "Singaña" },
  { name: "Luis", lastname: "Singaña" },
];

const User = () => {
  const [users, setusers] = useState(initialUser);
  //console.log('users',users)
  //console.log('setusers',setusers)

  const handADDusers = () => {
    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;

    const newUser = {
      id: users.length,
      name,
      lastname,
    };

    const newUserslist = [...users, newUser];

    setusers(newUserslist);
  };

  return (
    <>
      <div>
        <h1> Crear usuario </h1>
        <div>
          <label htmlfor="name">Nombre</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlfor="lastname">Apellido</label>
          <input type="text" id="lastname" />
        </div>

        <div>
          <button onClick={handADDusers} icon={<UserAddOutlined />}>
            Agregar
          </button>
        </div>
      </div>
      <div>
        <h1> Lista de Usuarios </h1>

        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} {user.lastname}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default User;
