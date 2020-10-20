import React, { Fragment } from 'react';
import SideBar from '../../SideBar/SideBar.js';
import TopBar from '../../TopBar/TopBar.js';

import '../../../App.scss';

const MiColeccion = () => {
  return (
    <Fragment>
      <div className="arriba">
        <TopBar />
      </div>
      <div className="abajo">
        <SideBar />
        <div className="container">
          <div className="TituloPrincipal">
            <h5 className="fina">MI COLECCIÓN</h5>
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

export default MiColeccion;