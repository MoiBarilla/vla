import React, { Component } from 'react';
import Imagenes from '../Assets/Img/Imagenes'


class Contacto extends Component {

    render() {

        return (
            <main className='container-fluid  pt-3'>
                <section className='col d-flex justify-content-around align-items-center flex-md-colum flex-wrap'>
                    <div className='col-12 mb-3'>
                        <h1>Contactenos</h1>
                        <h2>Te preparamos con las habilidades que necesitas para un mejor futuro</h2>
                    </div>
                    <aside className='col-lg-5 col-md-6 col-sm-12 col-12'>
                        <img className='card-img shadow-lg mb-3' src={Imagenes[0].contacto_banner} alt='Banner Nosotros' />
                        <div className='d-flex justify-content-around align-items-center flex-wrap'>
                            <img className='mt-2 mb-2 ml-3' src={Imagenes[0].logo} alt='Banner Nosotros mt-3' />

                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
                                Catálogo de Cursos</button>
                                <div className="dropdown-menu">
                                    <p className='font-weight-bold text-center'>Idiomas</p>
                                    <label className="dropdown-item"><input type="checkbox" aria-label="Checkbox for following tex" /><span className='ml-2'>Inglés Laboral</span></label>
                                    <label className="dropdown-item"><input type="checkbox" aria-label="Checkbox for following tex" /><span className='ml-2'>Portugués Integral</span></label>
                                    <label className="dropdown-item"><input type="checkbox" aria-label="Checkbox for following tex" /><span className='ml-2'>Inglés para Niños A1 | A2</span></label>

                                    <div className="dropdown-divider"></div>
                                    <p className='font-weight-bold text-center'>Tecnológicos</p>
                                    <label className="dropdown-item"><input type="checkbox" aria-label="Checkbox for following tex" /><span className='ml-2'>Master Front End Web Developer</span></label>
                                    <label className="dropdown-item"><input type="checkbox" aria-label="Checkbox for following tex" /><span className='ml-2'>Ciberseguridad</span></label>
                                    <label className="dropdown-item"><input type="checkbox" aria-label="Checkbox for following tex" /><span className='ml-2'>Marketing Digital</span></label>

                                    <div className="dropdown-divider"></div>
                                    <p className='font-weight-bold text-center'>Gerenciales</p>

                                    <label className="dropdown-item"><input type="checkbox" aria-label="Checkbox for following tex" /><span className='ml-2'>Gerencia de Proyectos</span></label>
                                    <label className="dropdown-item"><input type="checkbox" aria-label="Checkbox for following tex" /><span className='ml-2'>Lean Six Sigma Yellow Belt</span></label>
                                    <label className="dropdown-item"><input type="checkbox" aria-label="Checkbox for following tex" /><span className='ml-2'>Scrum Master Professional</span></label>
                                    

                                </div>
                            </div>

                        </div>
                    </aside>
                    <aside className='col-lg-5 col-md-4 col-sm-12 col-12 mt-3'>

                        <form id='formulario' className='form'>
                            <input className='form-control mb-4 p-2 d-block' type='text' placeholder='Nombre' required/>
                            <input className='form-control mb-4 p-2 d-block' type='tel' placeholder='Telefono' required/>
                            <input className='form-control mb-4 p-2 d-block' type='email' placeholder='E-mail'  required/>
                            <input className='form-control mb-4 p-2 d-block' type='text' placeholder='Pais' />
                            <textarea className='form-control mt-4 p-2 d-block' placeholder='Comentarios'></textarea>
                            <button className='btn btn-primary btn-block p-2 mt-5 font-weight-bold' type='submit'>Enviar</button>

                        </form>

                    </aside> 
                </section>

            </main>

        )

    }
}

export default Contacto