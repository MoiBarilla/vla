import React, { Component } from "react";
import "./Footer.css";
import Imagenes from "../Assets/Img/Imagenes";
import { Link, NavLink } from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <footer className="pt-5">
                <div className='bg-white mt-5 w-100'>
                <p className='font-weight-bold'>COMPANÍAS QUE CONFÍAN EN VLA</p>
                </div>
                <div className="bg-white pb-3 row">
                    <div className="mt-4 col-lg-2 col-md-4 col-6">
                        <img className="imagenes__empresas" src={Imagenes[0].airlines} alt="Copa Airlines" />
                    </div>
                    <div className="mt-4 col-lg-2 col-md-4 col-6">
                        <img className="imagenes__empresas" src={Imagenes[0].onda} alt="Cable Onda" />
                    </div>
                    <div className="mt-4 col-lg-2 col-md-4 col-6">
                        <img className="imagenes__empresas" src={Imagenes[0].roca} alt="Rocca" />
                    </div>
                    <div className="mt-4 col-lg-2 col-md-4 col-6">
                        <img className="imagenes__empresas" src={Imagenes[0].auxis} alt="Auxis" />
                    </div>
                    <div className="mt-4 col-lg-2 col-md-4 col-6">
                        <img className="imagenes__empresas" src={Imagenes[0].fujitsu} alt="Fujitsu" />
                    </div>
                    <div className="mt-4 col-lg-2 col-md-4 col-6">
                        <img className="imagenes__empresas" src={Imagenes[0].concentrix} alt="Concentrix" />
                    </div>
                </div>

                <div className="bg-dark row pt-3">
                    <section className="col-lg-4 col-md-12 col-sm-12 col-12 d-flex flex-column align-items-center pt-3">
                        <h5 className="text-white">Contactanos</h5>
                        <div className='d-flex justify-content-center'>
                            <div>
                                <div className="d-flex flex-direction-row align-items-center flex-nowrap pt-1">
                                    <img className="banderas" src={Imagenes[0].cr} alt='Bandera de Costa Rica' />
                                    <a href='tel:+506 4102 3282' className="text-white pl-2">+506 4102 3282</a>
                                </div>
                                <div className="d-flex flex-direction-row align-items-center flex-nowrap pt-1">
                                    <img className="banderas" src={Imagenes[0].panama} alt='Banderade Panamá' />
                                    <a href='tel:+507 833 5602' className="text-white pl-2">+507 833 5602</a>
                                </div>
                                <div className="d-flex flex-direction-row align-items-center flex-nowrap pt-1">
                                    <img className="banderas" src={Imagenes[0].españa} alt='Bandera de España' />
                                    <a href='tel:+34 911 23 5522' className="text-white pl-2">+34 911 23 5522</a>
                                </div>
                                <div className="d-flex flex-direction-row align-items-center flex-nowrap pt-1">
                                    <img className="banderas" src={Imagenes[0].usa} alt='Bandera de Estados Unidos' />
                                    <a href='tel:+1 786 633 4717' className="text-white pl-2">+1 786 633 4717</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="col-lg-4 pt-3">
                        <NavLink to='#' className="text-center text-white d-block">Empresa</NavLink>
                        <NavLink to='#' className="text-center text-white d-block">Blog</NavLink>
                        <NavLink to='#' className="text-center text-white d-block">Términos y Condiciones</NavLink>
                    </section>

                    <section className="col-lg-4 pt-3">
                        <h5 className='text-white text-center'>Síguenos en Nuestras Redes Sociales</h5>

                        <Link to='https://www.linkedin.com/'><img className='banderas ml-3' src={Imagenes[0].linkedin} alt='Logo de LinkedIn' /></Link>
                        <Link to='https://es-la.facebook.com/'><img className='banderas ml-3' src={Imagenes[0].facebook} alt='Logo de Facebook' /></Link>
                        <Link to='https://www.instagram.com/'><img className='banderas ml-3' src={Imagenes[0].instagram} alt='Logo de Instagram' /></Link>
                        <Link to='https://www.tiktok.com/'><img className='banderas ml-3' src={Imagenes[0].tiktok} alt='Logo de Tik Tok' /></Link>

                    </section>

                    <section className='footer p-3 col'>
                        <p className='text-center text-white'> Copyright &copy; Moises Barilla - 2022</p>
                    </section>
                </div>
            </footer>
        );
    }
}

export default Footer;
