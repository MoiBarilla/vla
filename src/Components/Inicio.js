import React, { Component } from "react";
import Imagenes from "../Assets/Img/Imagenes";
import { Link } from "react-router-dom";
class Inicio extends Component {

  render() {
    return (
      <div className="bg-light">

        <section className="container d-flex align-items-center flex-lg-row flex-column pt-5 pb-5">
          <aside className="col-lg-6 pt-5">

            <h1 className="text-center">Tu Camino Hacia el Éxito Empieza Ahora!</h1>
            <p className='pb-5'>
              Las empresas buscan personas con habilidades informáticas,
              gerenciales, de idiomas y mercadeo digital. Aprende con las clases
              100% en vivo por Internet de VLA. Tu rumbo a un mejor empleo
              empieza aquí.
            </p>
            <Link to='/contacto#formulario' className='btn btn-primary mb-5 p-2' type='button'>Reserva una clase Gratis</Link>

          </aside>
          <aside className='col-lg-6 pt-5 pb-5'>
            <img className='card-img shadow-lg' src={Imagenes[0].student} alt='Imagen del Inicio' />
          </aside>
        </section>

        <section className='bg-dark mt-5 pt-5'>
          <h2 className='text-white pb-4'>¿Por qué elegir VLA?</h2>
          <div className='col d-flex flex-lg-row justify-content-lg-around flex-column mt-3'>

            <div className="rounded bg-light col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
              <div className="card-header">Clases</div>
              <div className="p-3">
                <h5>100% En Vivo</h5>
                <p>Todos los cursos de VLA son enseñados totalmete en vivo, con un método de enseñanza único. Las clases de VLA permiten a todos nuestros estudiantes interactuar con sus profesores y responder todas sus dudas en tiempo real.</p>
              </div>
            </div>

            <div className="border rounded col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
              <div className="card-header text-white">Certificados</div>
              <div className="card-body text-white">
                <h5>Certifícate con VLA</h5>
                <p>Te preparamos para ganar las certificaciones más importantes de la industria como Cisco, PMP, Microsoft Azure, Scrum y muchas más. Con profesores expertos y certificados 100% en vivo por Internet.</p>
              </div>
            </div>

            <div className="rounded bg-light col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
              <div className="card-header">Beneficios</div>
              <div className="p-3">
                <h5>Ayuda gratis para buscar empleos</h5>
                <p>Uno de los más grandes beneficios de VLA es que  aquí tienes un programa de asistencia completamente gratis que te prepara y ayuda a conseguir tu próxima entrevista de trabajo para asegurar tu éxito.</p>
              </div>
            </div>

          </div>
          <div className='col d-flex justify-content-center pb-5 '>
            <div className='col-lg-3 col-md-4 col-sm-8 col-12'>
              <Link to='/contacto#formulario' type="button" className="btn btn-primary btn-block mt-5 mb-5 p-3">Conoce Más Sobre VLA</Link>
            </div>
          </div>
        </section >


      </div >
    );
  }
}

export default Inicio;
