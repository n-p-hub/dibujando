import React from 'react';
import { firestore } from "../../../base";
import app from '../../../base';
import TopBar from '../../TopBar/TopBar.js';
import SideBar from '../../SideBar/SideBar.js';

import '../../../App.scss';
import './Perfil.css';

function Perfil() {
  const usuarios = firestore.collection('Usuarios');
  const publicaciones = firestore.collection('Publicaciones');

  let pnombre;
  let papellido;
  let ppais;
  let pnacimiento;
  let pemail = app.auth().currentUser.email;
  let psexo;

  usuarios
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if(doc.id === app.auth().currentUser.uid) {
          this.pnombre = doc.data().nombre;
          this.papellido = doc.data().apellido;
          this.ppais = doc.data().pais;
          this.pnacimiento = doc.data().nacimiento;
          this.psexo = doc.data().sexo;
        }
      })
  })

  const handleUpdate = () => {
    usuarios
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if(doc.id === app.auth().currentUser.uid) {
            doc.update({
              nombre: document.getElementById('nombre'),
              apellido: document.getElementById('apellido'),
              pais: document.getElementById('pais'),
              nacimiento: document.getElementById('nacimiento'),
              sexo: document.getElementById('sexo'),
              email: document.getElementById('email')
            })
          }
        })
    })
    console.log(document.getElementById('email'));
    app.auth().currentUser.updateEmail(document.getElementById('email'));
    console.log('¡Actualizado!');
  }

  const handleDelete = () => {
    usuarios.doc(app.auth().currentUser.uid).delete();
    publicaciones
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if(doc.data().usuario === this.pnombre) {
            doc.delete();
          }
        })
      })
    app.auth().currentUser.delete();
    console.log('¡Eliminado!');
  }

  return (
    <div>
      <div className="arriba">
        <TopBar />
      </div>
      <div className="abajo">
        <SideBar />
        <div className="content">
          <div>
            <div>
              <div className="tituloPrincipal">
                <p id="tituloperfil" className="fina">MI PERFIL</p>
              </div>
              <label className="subtitulo">Personalizá la información de tu perfil acá.</label>
            </div>
            <br />
            <form>
              <div>
                <label>Nombre</label>
                <input type="input" className="ingresar" value={pnombre} id='nombre' name="nombre" />
              </div>
              <br />
              <div>
                <label>Apellido</label>
                <input type="input" className="ingresar" value={papellido} id='apellido' name="apellido" />
              </div>
              <br />
              <div>
                <label>Email</label>
                <input type="input" className="ingresar" value={pemail} id='email' name="email" />
              </div>
              <br />
              <div>
                <label>País</label>
                <input type="input" className="ingresar" value={ppais} id='pais' name="pais" />
              </div>
              <br />
              <div>
                <label>Fecha de nacimiento</label>
                <input type="input" className="ingresar" value={pnacimiento} id='nacimiento' name="nacimiento" />
              </div>
              <br />
              <div>
                <label>Sexo</label>
                <select className="ingresar" name="sexo" id="sexo" defaultValue="Sexo" required >
                  <option value={psexo} disabled>Sexo</option>
                  <option value="Hombre">Hombre</option>
                  <option value="Mujer">Mujer</option>
                </select>
              </div>
              <br />
              <div id="guardado">
                <button className="botones" type="submit" onClick={(handleUpdate)}>Guardar</button>
              </div>
            </form>
            <div id="otros">
              <button className="botones" id="logout" onClick={() => app.auth().signOut()}>Logout</button>
              <button className="botones" id="borrar" onClick={(handleDelete)}>Borrar Cuenta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;