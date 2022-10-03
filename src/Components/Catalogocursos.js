import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Imagenes from '../Assets/Img/Imagenes';

class Catalogocursos extends Component {

    render() {

        return (

            <main className="container-fluid">
                <h2 className="text-dark pt-5 pb-4">Cursos de Tecnología</h2>
                <section className="col d-flex flex-lg-row justify-content-lg-around flex-column mt-3">

                    <div className="rounded border border-warning bg-light col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
                        <img src={Imagenes[0].front_end} className="card-img-top img-fluid rounded-top mt-1" alt="Imagen del curso" />
                        <h5 className="card-title mt-3">Master en Front End Web Development</h5>
                        <div className="p-3">
                            <p>Duración 7 meses</p>
                            <Link to='#' className="btn btn-primary">Ver Mas</Link>
                        </div>
                    </div>

                    <div className="bg-dark rounded col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
                        <img src={Imagenes[0].cisco} className="card-img-top img-fluid rounded-top mt-1" alt="Imagen del curso" />
                        <h5 className="card-title mt-3 text-white">Cisco</h5>
                        <div className="card-body text-white">
                            <p>Duración 6 meses</p>
                            <Link to='#' className="btn btn-primary">Ver Mas</Link>
                        </div>
                    </div>

                    <div className="rounded border border-primary bg-light col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
                        <img src={Imagenes[0].python} className="card-img-top img-fluid rounded-top mt-1" alt="Imagen del curso" />
                        <h5 className="card-title mt-3">Python</h5>
                        <div className="p-3">
                            <p>Duración 3 meses</p>
                            <Link to='#' className="btn btn-primary">Ver Mas</Link>
                        </div>
                    </div>

                </section>


                <h2 className='text-dark pt-5 pb-4'>Cursos de Idiomas</h2>

                <section className='col d-flex flex-lg-row justify-content-lg-around flex-column mt-3'>

                    <div className="bg-dark rounded col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
                        <img src={Imagenes[0].ingles} className="card-img-top img-fluid rounded-top mt-1" alt="Imagen del curso" />
                        <h5 className="card-title mt-3 text-white">Certificados</h5>
                        <div className="card-body text-white">
                            <p>Duración 4 meses por módulo</p>
                            <Link to='#' className="btn btn-primary">Ver Mas</Link>
                        </div>
                    </div>

                    <div className="rounded border border-success bg-light col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
                        <img src={Imagenes[0].portugues} className="card-img-top img-fluid rounded-top mt-1" alt="Imagen del curso" />
                        <h5 className="card-title mt-3">Portugés</h5>
                        <div className="p-3">
                            <p>Duración 3 meses</p>
                            <Link to='#' className="btn btn-primary">Ver Mas</Link>
                        </div>
                    </div>

                    <div className="bg-dark rounded col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
                        <img src={Imagenes[0].ingles_niños} className="card-img-top img-fluid rounded-top mt-1" alt="Imagen del curso" />
                        <h5 className="card-title mt-3 text-white">Inglés Para Niños</h5>
                        <div className="card-body text-white">
                            <p>Duración 3 meses por módulo</p>
                            <Link to='#' className="btn btn-primary">Ver Mas</Link>
                        </div>
                    </div>

                </section>


                <h2 className='text-dark pt-5 pb-4'>Cursos Gerenciales</h2>

                <section className='col d-flex flex-lg-row justify-content-lg-around flex-column mt-3'>

                    <div className="rounded border border-info bg-light col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
                        <img src={Imagenes[0].project_management} className="card-img-top img-fluid rounded-top mt-1" alt="Imagen del curso" />
                        <h5 className="card-title mt-3">Project Management</h5>
                        <div className="p-3">
                            <p>Duración 5 meses</p>
                            <Link to='#' className="btn btn-primary">Ver Mas</Link>
                        </div>
                    </div>

                    <div className="bg-dark rounded col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
                        <img src={Imagenes[0].scrum} className="card-img-top img-fluid rounded-top mt-1" alt="Imagen del curso" />
                        <div className="card-title text-white mt-3">Cursos de Scrum Master</div>
                        <div className="card-body text-white">
                            <p>Duración 2 meses</p>
                            <Link to='#' className="btn btn-primary">Ver Mas</Link>
                        </div>
                    </div>

                    <div className="rounded border border-success bg-light col-lg-3 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1 mb-5">
                        <img src={Imagenes[0].excel} className="card-img-top img-fluid rounded-top mt-1" alt="Imagen del curso" />
                        <h5 className="card-title mt-3">Excel</h5>
                        <div className="p-3">
                            <p>Duración 3 meses por nivel</p>
                            <Link to='#' className="btn btn-primary">Ver Mas</Link>

                        </div>
                    </div>

                </section>

                <section className='row mt-5 mb-5'>

                    <aside className='col-lg-6 col-md-12 col-12 d-flex align-items-center mt-5 mb-5'>
                        <div>
                            <p>EMPIEZA HOY</p>
                            <h2 className='mt-3 mb-3'>Solicita una clase gratuita</h2>
                            <p className='font-weight-bold'>Toma una clase gratis y vive la experiencia VLA</p>
                            <p>El 87 % de las personas que aprenden para el desarrollo profesional reportan haber obtenido un ascenso, un aumento o comenzar una mejor carrera. </p>
                            <Link to='/contacto#formulario' className="btn btn-primary mt-5 p-2">Reserva una clase Gratis</Link>
                        </div>

                    </aside>

                    <aside className='col-lg-6'>

                    <img src={Imagenes[0].cursos_banner} className="card-img shadow-lg img-fluid rounded-top mt-1" alt="Imagen del curso" />



                    </aside>

                </section>

            </main>
        )

    }


}

export default Catalogocursos