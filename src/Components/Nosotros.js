import React, { Component } from 'react';
import Imagenes from '../Assets/Img/Imagenes';
import "./Nosotros.css";
import Nosotrosformulario from './Nosotrosformulario.js';
import axios from 'axios';
import { Link } from 'react-router-dom';


const api = `https://jsonplaceholder.typicode.com/users`;

class Nosotros extends Component {

    /* VARIABLES GLOBALES GET*/
    state = {
        empleados: []
    }

    async componentDidMount() {
        const { data: empleados } = await axios.get(api);
        this.setState({ empleados });

    }

    render() {

        return (

            <main className='container-fluid bg-light m-0 p-0'>

                <section className="container d-flex align-items-center flex-lg-row flex-column pt-5">
                    <aside className="col-lg-6">
                        <h1 className="text-center mb-3">¿Quienes Somos?</h1>
                        <p className='mb-4'>VLA Nació principalmente debido a la necesidad de las personas por obtener estudio de calidad a un buen precio. Es la solución al estudio técnico dado que las personas no siempre pueden costearse sus estudios.
                            Por esa razón nosotros ofrecemos precios muy accesibles para que puedan estudiar una buena carrera a un buen precio.
                            Y tú <span className='font-weight-bold'>¿Qué estás esperando?</span></p>
                        <Link to='/contacto#formulario' className='btn btn-primary mb-5 p-2 d-lg-none' type='button'>Reserva una clase Gratis</Link>
                    </aside>

                    <aside className='col-lg-6 pt-3 pb-5'>
                        <img className='card-img shadow-lg' src={Imagenes[0].nosotros_banner} alt='Banner Nosotros' />
                    </aside>
                </section>

                <section className='bg-dark mt-5 mb-5'>
                    <div className=' m-auto w-75 w-sm-100 p-5 d-flex align-items-center justify-content-around flex-wrap '>

                        <img className='mt-2 mb-2' src={Imagenes[0].logo} alt='Logo' />
                        <Link to='/contacto#formulario' className='btn btn-primary p-2 mt-2 mb-2' type='button'>Reserva una clase Gratis</Link>
                    </div>
                </section>

                <section className='bg-white scroll'>
                    <h2 className='mt-3 mb-5'>Conozca a nuestros Asesores Profesionales</h2>
                    <table className='shadow-lg table table-hover'>
                        <thead>
                            <tr>
                                <th className='encabezado__tabla bg-dark'>Id</th>
                                <th className='encabezado__tabla bg-dark'>Nombre</th>
                                <th className='encabezado__tabla bg-dark'>Usuario</th>
                                <th className='encabezado__tabla bg-dark'>E-mail</th>
                                <th className='encabezado__tabla bg-dark'>Teléfono</th>
                            </tr>
                        </thead>

                        <tbody className=' table'>
                            <tr className='cuerpo__tabla table-hover'>
                                <th className='encabezado__tabla bg-dark'>{this.state.empleados.map(empleado => <li className='list-unstyled'>{empleado.id}</li>)}</th>
                                <td className='cuerpo__tabla text-dark bg-white'>{this.state.empleados.map(empleado => <li className='list-unstyled'>{empleado.name}</li>)}</td>
                                <td className='cuerpo__tabla bg-white'>{this.state.empleados.map(empleado => <li className='list-unstyled'>{empleado.username}</li>)}</td>
                                <td className='cuerpo__tabla bg-white'>{this.state.empleados.map(empleado => <li className='list-unstyled'>{empleado.email}</li>)}</td>
                                <td className='cuerpo__tabla bg-white'>{this.state.empleados.map(empleado => <li className='list-unstyled'>{empleado.phone}</li>)}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <Nosotrosformulario />

            </main >
        )
    }
}


export default Nosotros