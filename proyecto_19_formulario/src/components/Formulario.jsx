import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Registro from "./Registro";
import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    //Validación
    if (nombre === "" || email === "" || password === "" || repeatpassword === "") {
      setError(true);
      return;
    }
    setError(false);
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
      {error ? <p className="error">Todos los campos son obligatorios</p> : null}
    </Form>
  );
}

export default Formulario;
