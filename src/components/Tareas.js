import { useEffect, useState } from "react";
import "../style/Todolist.css";
import { DeleteOutlined } from '@ant-design/icons';
import '../style/App.css';

const Tareas = () => {
  const [tareaini, settareaini] = useState([]);

  const [tareafin, settareafin] = useState([]);

  const [darkmod, setdarkmod] = useState(false);

  const handADDTarea = () => {
    const name = document.querySelector("#nombre").value;

    const newTarea = {
      id: tareaini.length,
      name,
    };

    const newTarealist = [...tareaini, newTarea];

    settareaini(newTarealist);
  };

  const Elimin = (index) => {
    settareaini(() => {
      return tareaini.filter((work, i) => i !== index);
    });
  };

  const Completa = (index) => {
    settareafin(() => [...tareafin, tareaini[index]]);

    Elimin(index);
  };

  useEffect(() => {
    console.log("Componen Cada vez");
  }); // en cada renderisado

  useEffect(() => {
    console.log("Componen Montado");
  }, []); //se ejecuta solo cuando se monta el componente si es basia ([])

  useEffect(() => {
    console.log("Componen Complete");
    if (tareaini.length > 0) {
      document.title = "Tienes tareas pendientes";
    } else {
      document.title = "No tienes tareas pendientes";
    }
  }, [Completa]); // si esta con una funcion solo se ejecuta cuando se ejecute esa funcion

  const handleSetDarkMode = () => {
    setdarkmod(!darkmod);
  };

  // ventana

  const [WindowWidth, setWindowWidth] = useState(window.innerWidth); //Variable de estado

  useEffect(() => {
    console.log("Ejecucion del efecto");
    window.addEventListener("resize", handleResize);

    
    return () => {
      console.log("Se desmonto");
      window.removeEventListener("resize", handleResize);
    };
  }, []); // no olvidar solo cuando se monte
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <div className={darkmod ? "dark-mode" : ""}>
      <div>
        <button onClick={handleSetDarkMode}>
          {darkmod ? "Modo Claro" : "Modo Oscuro"}
        </button>
        <h1> Ingresar Tarea </h1>
        <div>
          <label htmlfor="name">Nombre</label>
          <input type="text" id="nombre" />
        </div>

        <div>
          <button onClick={handADDTarea}> Agregar</button>
        </div>
      </div>
      <div>
        <h3> Lista de Tareas </h3>

        <ul>
          {tareaini.map((tarea, index) => (
            <li key={index}>
              <a id="Nombre2"> {tarea.name} </a>

              <button onClick={() => Elimin(index)} icon = {<DeleteOutlined />} > Elimminar </button>
              <button onClick={() => Completa(index)}> Completada</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3> Lista de Tareas Completadas </h3>
        <ul>
          {tareafin.map((tarea, index) => (
            <li key={index}>{tarea.name}</li>
          ))}
        </ul>
      </div>

      <h1>Ancho de la ventana : {WindowWidth}</h1>
    </div>
  );
};

export default Tareas;
