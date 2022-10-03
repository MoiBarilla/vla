import React, { Component } from 'react';


class Error extends Component {

    render() {

        return (
            <div classNAme='container-fluid d-flex align-items-center justify-content-center' style={{ width: '100%', height: 'calc(100vh - 100px)' }}>
                <div>
                    <h1>Error 404 </h1>
                    <p>Pagina No Encontrada...</p>
                </div>
            </div>
        )
    }
}

export default Error
