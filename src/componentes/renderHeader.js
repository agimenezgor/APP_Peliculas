import React from 'react';

class RenderHeader extends React.Component {
    render(){
        return (
            <header className="container-fluid bg-secondary p-3 sticky-top" style={{minHeight: "10vh"}}>
              <div className="m-0 row d-flex align-items-center w-100">
                <button className="col-md-4 d-flex justify-content-center btn btn-outline-info" onClick={this.props.changeHome}><h1>APP Películas</h1></button>
                <div className="col-md-4 d-flex justify-content-center">
                  <input className="w-100 rounded-lg input-group-text" type="text" id="Search" name="textSearch" value={this.props.textSearch} onChange={this.props.handleChange} placeholder="Nombre de la película que estás buscando..."></input>
                  <button className="btn btn-success" onClick={this.props.changeSearch}>Buscar</button>
                </div>
                <div className="col-md-4 d-flex justify-content-center"> 
                  <button className="btn btn-info mr-2" onClick={this.props.changePopular}>Películas Popular</button>
                  <button className="btn btn-info ml-2" onClick={this.props.changeUpcoming}>Últimas películas</button>
                </div>
              </div>
            </header>)
    }
}
export default RenderHeader;