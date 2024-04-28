import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Registro from "./Registro";
import Alert from "./Alert";
import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (nombre === "" || email === "" || password === "" || repeatpassword === "") {
      setError(true);
      setMensaje("Todos los campos son obligatorios");
      return;
    }
    else if (password !== repeatpassword) {
      setError(true);
      setMensaje("Las contraseñas deben ser iguales");
      return;
    }
    setError(false);
    setMensaje("Registro exitoso");
  };

  return (
    <Form className="formulario" onSubmit={validarDatos}>
      <h1>Crea una cuenta</h1>
      <Registro />
      <p>O usa tu E-mail para registrarte</p>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Tu_email@ejemplo.cl"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
        <br />
        <Form.Control
          type="password"
          placeholder="Repita Contraseña"
          onChange={(e) => setRepeatPassword(e.target.value)}
          value={repeatpassword}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Registrarse
      </Button>
      {!error && mensaje && <Alert mensaje={mensaje} tipo="success" />}
      {error && <Alert mensaje={mensaje} tipo="danger" />}
    </Form>
  );
}

export default Formulario;
