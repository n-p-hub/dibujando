import React from 'react';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import './SideBar.css';

function SideBar() {
    return (
        <div style={{ width: 250 }} className="SideBar">
            <div className="conjuntosecciones">
                <div className="secciones" id="secciones">
                    <label className="secciones"></label>
                    <MenuOpenIcon id="icono"></MenuOpenIcon>
                </div>
                <Link to="/" className="conjuntosecciones">
                    <div className="secciones" id="secciones">
                        <label className="secciones">Inicio</label>
                    </div>
                </Link>
                <Link to="/categories" className="conjuntosecciones">
                    <div  className="secciones" id="secciones">
                        <label className="secciones">Categorías</label>
                    </div>
                </Link>
                <Link to="/mycollection" className="conjuntosecciones">
                    <div className="secciones" id="secciones">
                        <label className="secciones">Mi Colección</label>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default SideBar;