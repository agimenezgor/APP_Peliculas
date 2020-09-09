import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portada from './componentes/Home.js';
import Populares from './componentes/Popular.js';
import Novedades from './componentes/Upcoming.js';
import Buscar from './componentes/Search.js';
import DetallePelicula from './componentes/MovieDetail.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      main: 'portada',
      arrayNovedades: [],
      arrayPopulares: [],
      textBuscar: '',
      arrayBuscar: [],
      pelicula: ''
    }
  }
  componentWillMount() {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES')
    .then(res=>res.json())
    .then(res =>{
        let arrayResultado = res.results;;
        arrayResultado.sort((mov1, mov2)=>{return mov2.popularity - mov1.popularity}); 
        this.setState({arrayNovedades: arrayResultado});
    })
    .catch(error=>console.error(error))
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES')
    .then(res=>res.json())
    .then(res =>{
        let arrayResultado = res.results;;
        arrayResultado.sort((mov1, mov2)=>{return mov2.popularity - mov1.popularity}); 
        this.setState({arrayPopulares: arrayResultado});
    })
    .catch(error=>console.error(error))
  }
  mainRender = () => {
    if(this.state.arrayNovedades.length > 0 && this.state.arrayPopulares.length > 0){
        if(this.state.main === 'portada'){return(<Portada changeDetallePelicula={this.changeDetallePelicula} arrayPopulares={this.state.arrayPopulares} arrayNovedades={this.state.arrayNovedades}/>)
        }else if(this.state.main === 'populares'){return(<Populares changeDetallePelicula={this.changeDetallePelicula} arrayPopulares={this.state.arrayPopulares}/>)
        }else if(this.state.main === 'novedades'){return(<Novedades changeDetallePelicula={this.changeDetallePelicula} arrayNovedades={this.state.arrayNovedades}/>)
        }else if(this.state.main === 'detalle'){return(<DetallePelicula pelicula={this.state.pelicula}/>)
        }else if(this.state.arrayBuscar !== null && this.state.main === 'buscar'){
          return(<Buscar changeDetallePelicula={this.changeDetallePelicula} arrayBuscar={this.state.arrayBuscar}/>)
        }else{this.setState({main: 'portada'})}
      }
  }
  changePortada = () => {this.setState({main: 'portada'})}
  changePopulares = () => {this.setState({main: 'populares'})}
  changeNovedades = () => {this.setState({main: 'novedades'})}
  changeBuscar = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.textBuscar}&api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=1&include_adult=false`)
    .then(res=>res.json())
    .then(res =>{
        this.setState({arrayBuscar: res.results});
        this.setState({main: 'buscar'});
    })
  } 
  handleChange = (event) => {this.setState({[event.target.name]:event.target.value});}
  changeDetallePelicula = (e) => {
    fetch(`https://api.themoviedb.org/3/movie/${e.target.id}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res=>res.json())
        .then(res=>{
            this.setState({pelicula: res, main: 'detalle'});
        })
        .catch(error=>console.error(error))
  }
  renderHeader = () => {
    return (
      <header className="container-fluid bg-secondary p-3 sticky-top" style={{minHeight: "10vh", maxHeight: "10vh"}}>
        <div className="m-0 row d-flex align-items-center w-100">
          <button className="col-md-4 d-flex justify-content-center btn btn-outline-info" onClick={this.changePortada}><h1>APP Películas</h1></button>
          <div className="col-md-4 d-flex justify-content-center">
            <input className="w-100 rounded-lg input-group-text" type="text" id="buscar" name="textBuscar" value={this.state.textBuscar} onChange={this.handleChange} placeholder="Nombre de la película que estás buscando..."></input>
            <button className="btn btn-success" onClick={this.changeBuscar}>Buscar</button>
          </div>
          <div className="col-md-4 d-flex justify-content-center"> 
            <button className="btn btn-info mr-2" onClick={this.changePopulares}>Películas populares</button>
            <button className="btn btn-info ml-2" onClick={this.changeNovedades}>Últimas películas</button>
          </div>
        </div>
      </header>)
  }
  renderFooter = () => {
    return (
      <footer className="bg-secondary d-flex justify-content-center align-items-center" style={{minHeight: "7vh"}}>
        <div className="text-warning">
          <h3>Copyright © 2020 Álvaro Giménez - Design: Álvaro Giménez</h3>
        </div>
      </footer>)
  }
  render(){
    return (
      <div className="App">
        {this.renderHeader()}
        <main className="bg-warning" style={{minHeight: "83vh"}}>
          {this.mainRender()}
        </main>
        {this.renderFooter()}
      </div>
    );
  }
}

export default App;
