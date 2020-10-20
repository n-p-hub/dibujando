import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../../base.js";
import { AuthContext } from "../../../Auth";


import '../SignUp/SignUp.scss';
import '../../../App.scss';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-container">
      <div>
        <div className="titulo">
          <h1 className="fina">INICIAR SESIÓN</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div>
            <input type="email" className="ingresar" placeholder="Email" name="email" required />
          </div>
          <br />
          <div>
            <input type="password" className="ingresar" placeholder="Password" name="password" required />
          </div>
          <br />
          <div className="opcion">
            <button className="botones" type="submit">Iniciar</button>
          </div>
        </form>
        <div className="opcion">
          <h5 id="limitador">¿No tenés una cuenta?</h5>
          <button className="botones" id="crear" onClick={() => history.push('/signup')}>Crear Cuenta</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);