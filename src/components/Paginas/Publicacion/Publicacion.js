import React from 'react';
import { firestore } from "../../../base";
import { useHistory } from "react-router-dom";
import app from "../../../base";
import TopBar from '../../TopBar/TopBar.js';
import SideBar from '../../SideBar/SideBar.js';

import '../../../App.scss';
import './Publicacion.css';

const Publicacion = async () => {
  const publicaciones = firestore.collection('Publicaciones');
  const usuarios = firestore.collection('Usuarios');
  let history = useHistory();
  let queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  let usuario;
  let pubusuario = 'a';
  let pubdescripcion;
  let pubcategoria;
  let pubvotantes;
  let pubpuntuacion;
  let pubcantvotantes;
  let pubimagen;
  let pubfecha;

  usuarios
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if(doc.id === app.auth().currentUser.uid) {
          usuario = doc.data().nombre + " " + doc.data().apellido;
        }
      })
    })

  const puntuar = () => {
    pubcantvotantes = pubcantvotantes + 1;
    document.getElementById('titpuntua').hidden = true;
    document.getElementById('puntuar').innerHTML = '¡Gracias por puntuar!';
    document.getElementById('puntuar').className = "deshabilitado";
    document.getElementById('puntuacion').style.visibility = "hidden";
    const voto = document.getElementById('puntuacion');
    publicaciones.get().then(snapshot => {
      snapshot.forEach(doc => {
        if(doc.id === id) {
          doc.data().votantes.push(usuario);
          doc.data().sumapuntuaciones = doc.data().sumapuntuaciones + voto;
          doc.data().puntuacion = doc.data().sumapuntuaciones / pubcantvotantes;
          doc.data().scantidadVotantes = pubcantvotantes;
        }
      })
    })
  }


  publicaciones
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if(doc.id === id) {
          pubusuario = doc.data().usuario;
          pubdescripcion = doc.data().descripcion;
          pubcategoria = doc.data().categoria;
          pubpuntuacion = doc.data().puntuacion;
          pubimagen = doc.data().imagenURL;
          pubvotantes = doc.data().votantes;
          pubcantvotantes = doc.data().cantidadVotantes;
          pubfecha = doc.data().fecha;
        }
      })
    if(!pubusuario) {
      history.push("*");
    }
    console.log('a');
     if(pubvotantes.length > 1) {
       for(let i = 0; i < pubvotantes.length; i ++) {
         if(pubvotantes[i] === usuario) {
           document.getElementById('titpuntua').hidden = true;
           document.getElementById('puntuar').innerHTML = 'Ya puntuaste esta publicación';
           document.getElementById('puntuar').className = "deshabilitado";
           document.getElementById('puntuacion').style.visibility = "hidden";
         }
       }
     }
  })

  return (
    <div>
      <div className="arriba">
        <TopBar />
      </div>
      <div className="abajo">
        <SideBar />
        <div className="contenido" id="contenedorpublicacion">
          <div>
            <img alt="imagen" src={pubimagen}></img>
          </div>
          <div >
            <p>{pubdescripcion}</p>
            <span>{pubusuario}</span>
            <span>{pubcategoria}</span>
            <span>{pubpuntuacion}</span>
            <span>{pubcantvotantes}</span>
          </div>
          <div>
            <span>{pubfecha}</span>
          </div>
          <div id="puntua">
            <label>¡Puntuá esta imagen!</label>
            <div>
              <select className="ingresar" name="puntuacion" id="puntuacion" defaultValue="puntuacion" >
                <option value="puntuacion" disabled>Tu puntuación</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button className="botones" type="submit" id="puntuar" onClick={puntuar}>Puntuar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publicacion;