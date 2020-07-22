import React from 'react';
import Moviegrid from './MovieGrid.js';

class Buscar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrayBuscar: props.arrayBuscar
        }
    }
    render() {
        if(this.state.arrayBuscar.length === 0){
            return(<div className="bg-danger d-flex flex-column justify-content-center align-items-center">
                <h2 className="m-3">Ningun resultado encontrado!!</h2>
                <h3 className="m-3">Vuelva a introducir un nombre válido</h3>
            </div>)
        }else{
            return(<div><Moviegrid changeDetallePelicula={this.props.changeDetallePelicula} renderArray={this.state.arrayBuscar}/></div>)
        }
    }
}
export default Buscar;