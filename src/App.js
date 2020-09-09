import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/Home.js';
import Popular from './componentes/Popular.js';
import Upcoming from './componentes/Upcoming.js';
import Search from './componentes/Search.js';
import MovieDetail from './componentes/MovieDetail.js';
import RenderHeader from './componentes/renderHeader';
import RenderFooter from './componentes/renderFooter';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      main: 'home',
      arrayUpcoming: [],
      arrayPopular: [],
      textSearch: '',
      arraySearch: [],
      movie: ''
    }
  }
  componentWillMount() {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES')
    .then(res=>res.json())
    .then(res =>{
        let arrayResults = res.results;;
        arrayResults.sort((mov1, mov2)=>{return mov2.popularity - mov1.popularity}); 
        this.setState({arrayUpcoming: arrayResults});
    })
    .catch(error=>console.error(error))
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES')
    .then(res=>res.json())
    .then(res =>{
        let arrayResults = res.results;;
        arrayResults.sort((mov1, mov2)=>{return mov2.popularity - mov1.popularity}); 
        this.setState({arrayPopular: arrayResults});
    })
    .catch(error=>console.error(error))
  }
  mainRender = () => {
    if(this.state.arrayUpcoming.length > 0 && this.state.arrayPopular.length > 0){
        if(this.state.main === 'home'){return(<Home changeMovieDetail={this.changeMovieDetail} arrayPopular={this.state.arrayPopular} arrayUpcoming={this.state.arrayUpcoming}/>)
        }else if(this.state.main === 'Popular'){return(<Popular changeMovieDetail={this.changeMovieDetail} arrayPopular={this.state.arrayPopular}/>)
        }else if(this.state.main === 'Upcoming'){return(<Upcoming changeMovieDetail={this.changeMovieDetail} arrayUpcoming={this.state.arrayUpcoming}/>)
        }else if(this.state.main === 'detail'){return(<MovieDetail movie={this.state.movie}/>)
        }else if(this.state.arraySearch !== null && this.state.main === 'Search'){
          return(<Search changeMovieDetail={this.changeMovieDetail} arraySearch={this.state.arraySearch}/>)
        }else{this.setState({main: 'home'})}
      }
  }
  changeHome = () => {this.setState({main: 'home'})}
  changePopular = () => {this.setState({main: 'Popular'})}
  changeUpcoming = () => {this.setState({main: 'Upcoming'})}
  changeSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.textSearch}&api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=1&include_adult=false`)
    .then(res=>res.json())
    .then(res =>{
        this.setState({arraySearch: res.results, main: 'Search'});
    })
  } 
  handleChange = (event) => {this.setState({[event.target.name]:event.target.value});}
  changeMovieDetail = (e) => {
    fetch(`https://api.themoviedb.org/3/movie/${e.target.id}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res=>res.json())
        .then(res=>{
            this.setState({movie: res, main: 'detail'});
        })
        .catch(error=>console.error(error))
  }
  render(){
    return (
      <div className="App">
        <RenderHeader changeHome={this.changeHome} textSearch ={this.state.textSearch} handleChange={this.handleChange} changeSearch={this.changeSearch} changePopular={this.changePopular} changeUpcoming={this.changeUpcoming}/>
        <main className="bg-info" style={{minHeight: "83vh"}}>
          {this.mainRender()}
        </main>
        <RenderFooter/>
      </div>
    );
  }
}

export default App;
