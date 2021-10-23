import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              Portal Educacion
            </a>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
              type="button"
              aria-controls="navcol-1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav flex-grow-1 justify-content-center">
                <li className="nav-item" role="presentation">
                    <a className="nav-link px-5" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link px-5" aria-current="page" href="#">Cursos</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link px-5" aria-current="page" href="#">Informacion Becas</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link px-5" aria-current="page" href="#">Informacion Trabajos</a>                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}