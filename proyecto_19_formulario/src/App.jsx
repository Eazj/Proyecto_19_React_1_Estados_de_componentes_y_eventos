import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [mensaje, setMensaje] = useState("");
  return (
    <>
      <Formulario setMensaje={setMensaje} />
      {mensaje && <Alert mensaje={mensaje} />}
    </>
  );
}

export default App;
