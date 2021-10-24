import React from "react";
import "./HomeScreen.css";
import work from "./assets/work.png";
import study from "./assets/study.png";
import graduated from "./assets/graduated.jpg";
import miFuturo from './assets/mi_futuro.png'
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
              Además de otras opciones busca entre los cursos gratis temas de
              repaso para prepararte bien antes o al inicio de la Universidad
            </p>
            <p className="lead mb-0">
              <a href="courses" className="text-white font-weight-bold">
                Ve nuestros cursos preparativos...
              </a>
            </p>
          </div>
          <div className="col banner-image-container">
            <img className="bd-placeholder-img banner-image" src={graduated} />
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
                  Informate y encuentra todas las oportunidades de beca o
                  financiamiento perfectas para ti
                </p>
                <a href="becas" className="text-muted stretched-link">
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
                  Busca empleos ideales para que puedas obtener ingresos y
                  estudiar al mismo tiempo, con empresas que apoyan a los
                  estudiantes
                </p>
                <a href="jobs" className="text-muted stretched-link">
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
        <div className="row">
          <div className="col-md-8 blog-main">
            <h3 className="pb-4 mb-4 font-italic">
              Acerca de
            </h3>

            <div className="blog-post">
              <h2 className="blog-post-title">¿Qué es Mi Futuro GT?</h2>
              
              <hr />
              <p>
              Mi Futuro GT es una multiplataforma estudiantil de estudiantes para estudiantes, en la cual puedes encontrar financiamiento o becas para tus estudios universitarios, trabajos aptos para  estudiar al mismo tiempo y cursos preparatorios para entrar a la universidad o ayudarte en los inicios de tu carrera universitaria.
              </p>
              <blockquote>
                <p>
                Nosotros comprendemos que a veces pueden surgir bloqueos de conocimiento para poder estudiar en un nivel superior. Por lo que solucionamos esto mediante cursos hechos por estudiantes universitarios que reciben horas de servicio o créditos a cambio de publicar material educativo.
                </p>
              </blockquote>
              
              
              <p>
              A veces existe el deseo y la capacidad para estudiar, pero por barreras económicas es imposible financiar este sueño. Por lo que solucionamos esto mediante 2 maneras:
              </p>
              <ul>
                <li>
                Dando información de manera fácil acerca de becas y financiamientos para estudios de educación superior.
                </li>
                <li>Colaborando con empresas, las cuales colocan en nuestra plataforma empleos de medio tiempo los cuales apoyan a los estudiantes al momento de estudiar. También facilitamos el proceso de aplicación a los puestos.</li>
              </ul>
              <blockquote>
                <p>
                Con estas soluciones estamos aportando a eliminar bloqueos que tienen las personas para no poder estudiar una educación superior. Por lo que esperamos que nuestra plataforma sea de gran ayuda y apoyemos a formar a los profesionales del futuro.
                </p>
              </blockquote>
              
            </div>
          </div>

          <aside className="col-md-4 blog-sidebar my-auto">
            

            <img className="logo-about" src ={miFuturo}>
              
            </img>

          </aside>
        </div>
      </div>
      <footer className="blog-footer">
  <p>&copy;Programadores con bata 2021</p>
  
</footer>
    </>
  );
}

export default HomeScreen;
