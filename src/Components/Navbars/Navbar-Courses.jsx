import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar-Course.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default function Navbar_Course() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav flex-grow-1 justify-content-center">
                  <li className="nav-item">
                    <form>
                        <input className='input-style' type = 'search' placeholder='Search...'/>
                        <button className='button-style-search'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                    </form>
                  </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Matematica</a></li>
                        <li><a className="dropdown-item" href="#">Fisica</a></li>
                        <li><a className="dropdown-item" href="#">Programacion</a></li>
                        <li><a className="dropdown-item" href="#">Biologia</a></li>
                        <li><a className="dropdown-item" href="#">Quimica</a></li>
                    </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}