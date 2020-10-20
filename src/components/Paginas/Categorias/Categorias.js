import React from 'react';
import SideBar from '../../SideBar/SideBar.js';
import TopBar from '../../TopBar/TopBar.js';

import '../../../App.scss';
import './Categorias.css';

function Categorias() {
    return (
        <div>
            <div className="arriba">
                <TopBar />
            </div>
            <div className="abajo">
                <SideBar />
                <div className="container">
                <div className="TituloPrincipal">
                    <h5 className="fina">BUSCAR PUBLICACIONES</h5>
                </div>
                <form>
                    <div id="busqueda">
                        <label>¡Buscá la categoría que quieras!</label>
                        <div>
                            <input className="ingresar" name="buscar" id="buscar" placeholder="Categoría" required />
                            <button className="botones" id="busca">Buscar</button>
                        </div>
                    </div>
                </form>
                <div className="cuadrado">
                    <a href="publications">
                    <div className="vistapreviaej"></div>
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Categorias;