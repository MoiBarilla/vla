import React, { Component } from 'react';
import axios from 'axios'
import "./Nosotros.css";


const api = `https://jsonplaceholder.typicode.com/users`;

class Nosotrosformulario extends Component {

    /*POST CON AXIOS*/
    constructor(props) {
        super(props)
        this.onChangeUserNombre = this.onChangeUserNombre.bind(this)
        this.onChangeUserUsuario = this.onChangeUserUsuario.bind(this)
        this.onChangeUserCorreo = this.onChangeUserCorreo.bind(this)
        this.onChangeUserTelefono = this.onChangeUserTelefono.bind(this)
        this.state = {
            nombre: '',
            usuario: '',
            correo: '',
            telefono: ''
        }

    }
    onChangeUserNombre(e) {
        this.setState({ nombre: e.target.value });
    }
    onChangeUserUsuario(e) {
        this.setState({ usuario: e.target.value });
    }
    onChangeUserCorreo(e) {
        this.setState({ correo: e.target.value });
    }
    onChangeUserTelefono(e) {
        this.setState({ telefono: e.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        //VARIABLES GLOBALES POST

        const userObject = {
            nombre: this.state.nombre,
            usuario: this.state.usuario,
            correo: this.state.correo,
            telefono: this.state.telefono
        }

        axios.post(api, { userObject })
            .then((respuesta) => {

                this.respuesta = respuesta;

                console.log(respuesta);

                const identifier = respuesta.data.id;
                const properName = userObject.nombre;
                const userName = userObject.usuario;
                const email = userObject.correo;
                const tel = userObject.telefono;

                prompt(`\n  Id: ${identifier}\n  Nombre: ${properName}\n  Usuario: ${userName}\n  Email: ${email}\n  Teléfono: ${tel}`);
            });

    }


    render() {

        return (

            <main>

                <section className='bg-white scroll'>
                    <h2 className='mt-3 mb-5 text-dark d-lg-none d-md-none d-sm-block d-block'>Añadir Persona a Nuestro Equipo de Trabajo</h2>

                    <table className='shadow-lg table table-hover'>
                        <thead>
                            <tr>
                                {/* <th className='encabezado__tabla bg-dark'>Id</th> */}
                                <th className='encabezado__tabla bg-dark'>Nombre</th>
                                <th className='encabezado__tabla bg-dark'>Usuario</th>
                                <th className='encabezado__tabla bg-dark'>E-mail</th>
                                <th className='encabezado__tabla bg-dark'>Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='cuerpo__tabla table-hover'>
                                {/* <th className='encabezado__tabla bg-dark'><li className='list-unstyled'>{this.state.id}</li></th> */}
                                <td className='cuerpo__tabla text-dark bg-white'><li className='list-unstyled'>{this.state.nombre}</li></td>
                                <td className='cuerpo__tabla bg-white'><li className='list-unstyled'>{this.state.usuario}</li></td>
                                <td className='cuerpo__tabla bg-white'><li className='list-unstyled'>{this.state.correo}</li></td>
                                <td className='cuerpo__tabla bg-white'><li className='list-unstyled'>{this.state.telefono}</li></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className='col bg-dark pt-3 pb-5'>

                    <h2 className='mt-3 mb-5 text-white d-lg-block d-md-block d-sm-none d-none'>Añadir Persona a Nuestro Equipo de Trabajo</h2>

                    <form onSubmit={this.onSubmit} className='pt-5 pb-5 pl-3 pr-3 border rounded border-info bg-white col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1'>
                        <input onChange={this.onChangeUserNombre} value={this.state.nombre} className='form-control border-info mb-4 p-2 d-block' type='text' placeholder='Nombre' />
                        <input onChange={this.onChangeUserUsuario} value={this.state.usuario} className='form-control border-info mb-4 p-2 d-block' type='tel' placeholder='Usuario' />
                        <input onChange={this.onChangeUserCorreo} value={this.state.correo} className='form-control border-info mb-4 p-2 d-block' type='email' placeholder='E-mail' />
                        <input onChange={this.onChangeUserTelefono} value={this.state.telefono} className='form-control border-info mb-4 p-2 d-block' type='text' placeholder='Teléfono' />
                        <hr />
                        <button className='btn btn-primary btn-block shadow font-weight-bold' type='submit'>Añadir Usuario</button>

                    </form>
                </section>
            </main >
        )
    }
}

export default Nosotrosformulario