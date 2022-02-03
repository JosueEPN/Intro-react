import {useState} from "react";
import User from "./User";
import Tareas from "./Tareas";
import Userinfo from "./Userinfo";
import {Button} from "antd";
import { MoreOutlined } from '@ant-design/icons';
import '../style/App.css';

function App(princi) {

  const [showTodo, setshowTodo] = useState(true);
  const handleToggleTodolist = () =>{
    setshowTodo(!showTodo);
  };
  return (
    <>
      
      <Userinfo />
      <User />

      <div>
        <Button  type="primary" onClick = {handleToggleTodolist}
        icon = {<MoreOutlined />}>
          {showTodo ? "Ocultar": "Mostrar"} lista de tareas
        </Button>
      </div>
      {showTodo && <Tareas />}
    </>
  );
}

export default App;
