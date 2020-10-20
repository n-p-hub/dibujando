import React from 'react';
import app from '../../base';

import './TopBar.css';
import '../../App.scss';

function TopBar() {
    return (
        <header>
            <img src="Images/Icono.png" alt="logo" id="icon"></img>
            <a href="/upload" id="subir"><button className="botones">Subir Dibujo</button></a>
            <div id="derecha">
                <a style={{ float: "right" }} id="perfil" href="/profile"><img src="Images/Profile.png" alt="perfil" id="logo"></img></a>
                <button onClick={() => app.auth().signOut()} style={{ float: "right" }} className="botones" id="logout">Logout</button>
            </div>
        </header>
    );
}

export default TopBar;


