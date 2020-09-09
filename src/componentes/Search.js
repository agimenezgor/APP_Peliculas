import React from 'react';
import Moviegrid from './MovieGrid.js';

class Search extends React.Component {
    render() {
        if(this.props.arrayBuscar.length === 0){
            return(<div className="bg-danger d-flex flex-column justify-content-center align-items-center">
                <h2 className="m-3">Ningun resultado encontrado!!</h2>
                <h3 className="m-3">Vuelva a introducir un nombre válido</h3>
            </div>)
        }else{
            return(<div><Moviegrid changeDetallePelicula={this.props.changeDetallePelicula} renderArray={this.props.arrayBuscar}/></div>)
        }
    }
}
export default Search;