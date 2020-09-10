import React from 'react';
import { Link } from 'react-router-dom';

class RenderHeader extends React.Component {
    render(){
        return (
            <header className="container-fluid bg-secondary p-3 sticky-top" style={{minHeight: "10vh"}}>
              <div className="m-0 row d-flex align-items-center w-100">
                <div className="col-md-4">
                  <Link to="/"><button className=" d-flex justify-content-center btn btn-outline-info"><h1>APP Películas</h1></button></Link>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <input className="w-100 rounded-lg input-group-text" type="text" id="Search" name="textSearch" value={this.props.textSearch} onChange={this.props.handleChange} placeholder="Nombre de la película que estás buscando..."></input>
                  <Link to="/buscar"><button className="btn btn-success" onClick={this.props.movieSearch}>Buscar</button></Link>
                </div>
                <div className="col-md-4 d-flex justify-content-center"> 
                  <Link to="/populares"><button className="btn btn-info mr-2">Películas Popular</button></Link>
                  <Link to="/novedades"><button className="btn btn-info ml-2">Últimas películas</button></Link>
                </div>
              </div>
            </header>)
    }
}
export default RenderHeader;