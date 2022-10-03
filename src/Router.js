import React, { Component } from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
//Rutas
import Navbar from "./Components/Navbar";
import Inicio from "./Components/Inicio";
import Catalogocursos from "./Components/Catalogocursos";
import Nosotros from "./Components/Nosotros";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import Error from "./Components/Error";

class Router extends Component {
    render() {
        return (
           <Routes>

                <Navbar />
                <Switch>
                    <Route exact path='/' component = {Inicio} />
                    <Route exact path='/inicio' component = {Inicio} />
                    <Route exact path='/cursos' component = {Catalogocursos} />
                    <Route exact path='/nosotros' component = {Nosotros} />
                    <Route exact path='/contacto' component = {Contacto} />
                    <Route path='*' component = {Error} />
                </Switch>
                <Footer />

            </Routes>
        )
    }
}

export default Router
