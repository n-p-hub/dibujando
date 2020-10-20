import React, { Fragment } from 'react';
import SideBar from '../../SideBar/SideBar.js';
import TopBar from '../../TopBar/TopBar.js';

import '../../../App.scss';

const Inicio = () => {

  // function renderPublicacion(doc){
  //   let li = document.createElement('li');
  //   let usuariop = document.createElement('span');
  //   let categoriap = document.createElement('span');

  //   li.setAttribute('data-id', doc.id);
  //   usuariop.textContent = doc.data().usuario;
  //   categoriap.textContext = doc.data().categoria;

  //   li.appendChild(usuariop);
  //   li.appendChild(categoriap);

  //   atributos.appendChild(li);
  // }

  // renderPublicacion(doc);
  return (
        <Fragment>
          <div className="arriba">
            <TopBar />
          </div>
          <div className="abajo">
            <SideBar />
            <div className="container">
              <div className="TituloPrincipal">
                <h5 className="fina">PUBLICACIONES</h5>
              </div>
              <div className="cuadrado">
                <a href="publications">
                  <div className="vistapreviaej"></div>
                </a>
              </div>
            </div>
          </div>
        </Fragment>
  );
}

export default Inicio;