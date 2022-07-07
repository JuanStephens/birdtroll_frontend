import React from "react";
//import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import { Container, Header } from "./styles";
import { useRef, useState, useEffect } from "react";

export const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <Container>
      {/* header */}
      <Header>
        <h1>Prueba</h1>
      </Header>

      <>
        {success ? (
          <section>
            <h1>Has ingresado!</h1>
            <br />
            <p>
              <Link to="/">Ir a la pagina principal</Link>
            </p>
          </section>
        ) : (
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errMsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Ingresar</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Usuario: </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="password">Contraseña: </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />

              <button>Iniciar Sesión</button>
            </form>
            <p>
              Nececitas una cuenta? <br />
              <span className="line">
                {/*Link de redireccion a creacion de cuenta si existe*/}
                <Link to="/">Registro</Link>
              </span>
            </p>
          </section>
        )}
      </>
    </Container>
  );
};
