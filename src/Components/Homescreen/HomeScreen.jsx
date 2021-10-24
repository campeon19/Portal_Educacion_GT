import React from "react";
import "./HomeScreen.css";
import work from './assets/work.png'
import study from './assets/study.png'
import graduated from './assets/graduated.jpg'
function HomeScreen() {
  return (
    <>
    <div className="container">
      <div className="row jumbotron p-4 p-md-5 text-white rounded bg-dark innitial-banner">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">
          ¡Aprende, busca oportunidades y sal adelante!
          </h1>
          <p className="lead my-3">
          Además de otras opciones busca entre los cursos gratis temas de repaso para prepararte bien antes o al inicio de la Universidad
          </p>
          <p className="lead mb-0">
            <a href="#" className="banner-text-link font-weight-bold">
              Ve nuestros cursos preparativos...
            </a>
          </p>
        </div>
        <div className="col banner-image-container">
        <img
                className="bd-placeholder-img banner-image"
                src={graduated}
              />
        </div>
      </div>
      
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="text-hanger-title d-inline-block mb-2">
                Patrocinio de tus estudios
              </strong>
              <h3 className="mb-0">Oportunidades de beca</h3>
              <div className="mb-1 text-muted"></div>
              <p className="card-text mb-auto">
                Informate y encuentra todas las oportunidades de beca o financiamiento perfectas para ti
              </p>
              <a href="#" className="text-muted stretched-link">
                Busca becas y financiamiento
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="200"
                height="250"
                src={study}
              />
              
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-hanger-title">
                Fuentes de ingreso
              </strong>
              <h3 className="mb-0">Encuentra trabajo</h3>
              <div className="mb-1 text-muted"></div>
              <p className="mb-auto">
                Busca empleos ideales para que puedas obtener ingresos y estudiar al mismo tiempo, con empresas que apoyan a los estudiantes
              </p>
              <a href="#" className="text-muted stretched-link">
                Encuentra tu trabajo ideal
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img
                className="bd-placeholder-img"
                width="200"
                height="250"
                src={work}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default HomeScreen;
