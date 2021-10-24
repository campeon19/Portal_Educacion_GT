import React from "react";
import "./HomeScreen.css";
import work from "./assets/work.png";
import study from "./assets/study.png";
import graduated from "./assets/graduated.jpg";
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
              <a href="#" className="text-white font-weight-bold">
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
                  Busca empleos ideales para que puedas obtener ingresos y
                  estudiar al mismo tiempo, con empresas que apoyan a los
                  estudiantes
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
        <div className="row">
          <div className="col-md-8 blog-main">
            <h3 className="pb-4 mb-4 font-italic border-bottom">
              From the Firehose
            </h3>

            <div className="blog-post">
              <h2 className="blog-post-title">Sample blog post</h2>
              <p className="blog-post-meta">
                January 1, 2014 by <a href="#">Mark</a>
              </p>

              <p>
                This blog post shows a few different types of content that’s
                supported and styled with Bootstrap. Basic typography, images,
                and code are all supported.
              </p>
              <hr />
              <p>
                Cum sociis natoque penatibus et magnis{" "}
                <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
              <blockquote>
                <p>
                  Curabitur blandit tempus porttitor.{" "}
                  <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                  eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </blockquote>
              <p>
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              
              
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur. Etiam porta sem malesuada magna mollis euismod.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <ul>
                <li>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              
            </div>
          </div>

          <aside className="col-md-4 blog-sidebar">
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="font-italic">About</h4>
              <p className="mb-0">
                Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
            </div>

            <div className="p-4">
              <h4 className="font-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li>
                  <a href="#">March 2014</a>
                </li>
                <li>
                  <a href="#">February 2014</a>
                </li>
                <li>
                  <a href="#">January 2014</a>
                </li>
                <li>
                  <a href="#">December 2013</a>
                </li>
                <li>
                  <a href="#">November 2013</a>
                </li>
                <li>
                  <a href="#">October 2013</a>
                </li>
                <li>
                  <a href="#">September 2013</a>
                </li>
                <li>
                  <a href="#">August 2013</a>
                </li>
                <li>
                  <a href="#">July 2013</a>
                </li>
                <li>
                  <a href="#">June 2013</a>
                </li>
                <li>
                  <a href="#">May 2013</a>
                </li>
                <li>
                  <a href="#">April 2013</a>
                </li>
              </ol>
            </div>

            <div className="p-4">
              <h4 className="font-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
