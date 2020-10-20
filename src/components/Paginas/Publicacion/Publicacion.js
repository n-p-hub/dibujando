import React from 'react';

import { firestore } from "../../../base";
import TopBar from '../../TopBar/TopBar.js';
import SideBar from '../../SideBar/SideBar.js';

import '../../../App.scss';
import './Publicacion.css';

class Publicacion extends React.Component {
  
  

  usuario;
  pubusuario=null;
  pubdescripcion;
  pubcategoria;
  pubvotantes;
  pubpuntuacion;
  pubcantvotantes;
  pubimagen;
  pubfecha;

  componentDidMount() {
      let publicaciones = firestore.collection('Publicaciones');
      const urlParams = new URLSearchParams(this.props.location.search);
      let id = urlParams.get('id');
      publicaciones.doc(id).get().then(doc=>{
        this.pubusuario = doc.data().usuario;
        this.pubdescripcion = doc.data().descripcion;
        this.pubcategoria = doc.data().categoria;
        this.pubpuntuacion = doc.data().puntuacion;
        this.pubimagen = doc.data().imagenURL;
        this.pubvotantes = doc.data().votantes;
        this.pubcantvotantes = doc.data().cantidadVotantes;
        this.pubfecha = doc.data().fecha;
        this.setState({})
      })
      /*if(pubvotantes.length > 1) {
        for(let i = 0; i < pubvotantes.length; i ++) {
          if(pubvotantes[i] === usuario) {
            document.getElementById('titpuntua').hidden = true;
            document.getElementById('puntuar').innerHTML = 'Ya puntuaste esta publicación';
            document.getElementById('puntuar').className = "deshabilitado";
            document.getElementById('puntuacion').style.visibility = "hidden";
          }
        }
      }*/
    
  }

  render(){
    if (this.pubusuario===null)
    {
      return ("Loading...")
    }else{
      return (
        <div>
          <div className="arriba">
            <TopBar />
          </div>
          <div className="abajo">
            <SideBar />
            <div className="contenido" id="contenedorpublicacion">
              <div>
                <img alt="imagen" src={this.pubimagen}></img>
              </div>
              <div >
                <p>{this.pubdescripcion}</p>
                <span>{this.pubusuario}</span>
                <span>{this.pubcategoria}</span>
                <span>{this.pubpuntuacion}</span>
                <span>{this.pubcantvotantes}</span>
              </div>
              <div>
                <span>{this.pubfecha}</span>
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
                  <button className="botones" type="submit" id="puntuar" onClick={this.puntuar}>Puntuar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}


// const Publicacion = async () => {
  

//   usuarios
//     .get()
//     .then(snapshot => {
//       snapshot.forEach(doc => {
//         if(doc.id === app.auth().currentUser.uid) {
//           usuario = doc.data().nombre + " " + doc.data().apellido;
//         }
//       })
//     })

//   const puntuar = () => {
//     pubcantvotantes = pubcantvotantes + 1;
//     document.getElementById('titpuntua').hidden = true;
//     document.getElementById('puntuar').innerHTML = '¡Gracias por puntuar!';
//     document.getElementById('puntuar').className = "deshabilitado";
//     document.getElementById('puntuacion').style.visibility = "hidden";
//     const voto = document.getElementById('puntuacion');
//     publicaciones.get().then(snapshot => {
//       snapshot.forEach(doc => {
//         if(doc.id === id) {
//           doc.data().votantes.push(usuario);
//           doc.data().sumapuntuaciones = doc.data().sumapuntuaciones + voto;
//           doc.data().puntuacion = doc.data().sumapuntuaciones / pubcantvotantes;
//           doc.data().scantidadVotantes = pubcantvotantes;
//         }
//       })
//     })
//   }


  

//   render() { 
//     return (
//     <div>
//       <div className="arriba">
//         <TopBar />
//       </div>
//       <div className="abajo">
//         <SideBar />
//         <div className="contenido" id="contenedorpublicacion">
//           <div>
//             <img alt="imagen" src={pubimagen}></img>
//           </div>
//           <div >
//             <p>{pubdescripcion}</p>
//             <span>{pubusuario}</span>
//             <span>{pubcategoria}</span>
//             <span>{pubpuntuacion}</span>
//             <span>{pubcantvotantes}</span>
//           </div>
//           <div>
//             <span>{pubfecha}</span>
//           </div>
//           <div id="puntua">
//             <label>¡Puntuá esta imagen!</label>
//             <div>
//               <select className="ingresar" name="puntuacion" id="puntuacion" defaultValue="puntuacion" >
//                 <option value="puntuacion" disabled>Tu puntuación</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//               </select>
//               <button className="botones" type="submit" id="puntuar" onClick={puntuar}>Puntuar</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );}
// };

export default Publicacion;