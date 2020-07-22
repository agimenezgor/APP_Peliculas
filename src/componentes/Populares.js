import React from 'react';
import Moviegrid from './MovieGrid.js';

class Populares extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrayPopulares: props.arrayPopulares
        }
    }
    render(){
        return(
            <div><Moviegrid changeDetallePelicula={this.props.changeDetallePelicula} renderArray={this.state.arrayPopulares}/></div>
        )
    }
}
export default Populares;