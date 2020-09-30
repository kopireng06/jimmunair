import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 fixed-top">
            <div className="container-lg">
                <img className="logo-navbar" src="images/logojimm.png" ></img><a className="navbar-brand text-logo" href="#">JIMM UNAIR</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">HOME</Link>
                            <div className="line-navbar"/>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tentang">TENTANG</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">KABAR JIMM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PENA JIMM</a>
                        </li>
                        <li className="nav-item ml-lg-5 mt-1">
                            <a className="btn btn-success btn-sm" href="#">LOGIN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function removeLeadSlash(path){
    return path.replace(/^\/+/g, '');
}
export default Navbar;