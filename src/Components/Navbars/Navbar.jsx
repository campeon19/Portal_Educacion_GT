import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './Assets/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBook, faBriefcase, faHome, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
          <div className="container">
            <Link to='/' className="navbar-brand" href="#">
              <img src={logo} className="logo-image"/>
            </Link>
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
                    <Link to='/' className="nav-link px-5" aria-current="page" href="#"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to='/courses' className="nav-link px-5" aria-current="page" href="#"><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Cursos</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to='/becas' className="nav-link px-5" aria-current="page" href="#"><FontAwesomeIcon icon={faInfo}></FontAwesomeIcon> Informacion Becas</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to='/jobs' className="nav-link px-5" aria-current="page" href="#"><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon> Informacion Trabajos</Link>                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}