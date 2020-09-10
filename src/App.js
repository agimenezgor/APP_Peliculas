import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderHeader from './componentes/renderHeader';
import RenderFooter from './componentes/renderFooter';
import AppRouter from './componentes/AppRouter';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      arrayUpcoming: [],
      arrayPopular: [],
      textSearch: '',
      arraySearch: [],
      movie: ''
    }
  }
  componentWillMount() {
    const array = ['upcoming', 'popular'];
    array.forEach(element => {
      fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
      .then(res=>res.json())
      .then(res =>{
          if(element === 'upcoming'){this.setState({arrayUpcoming: res.results.sort((mov1, mov2)=>mov2.popularity - mov1.popularity)});
          }else{this.setState({arrayPopular: res.results.sort((mov1, mov2)=>mov2.popularity - mov1.popularity)});}
      })
      .catch(error=>console.error(error))
    });
  } 
  movieSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.textSearch}&api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES&page=1&include_adult=false`)
      .then(res=>res.json())
      .then(res =>{this.setState({arraySearch: res.results})})
      .catch(error=>console.error(error))
  } 
  handleChange = (event) => {this.setState({[event.target.name]:event.target.value});}
  changeMovieDetail = (e) => {
    fetch(`https://api.themoviedb.org/3/movie/${e.target.id}?api_key=b5138e06a3a9125b8c326498bbeae997&language=es-ES`)
        .then(res=>res.json())
        .then(res=>{this.setState({movie: res})})
        .catch(error=>console.error(error))
  }
  render(){
    return (
      <div className="App">
        <RenderHeader textSearch ={this.state.textSearch} handleChange={this.handleChange} movieSearch ={this.movieSearch}/>
        <main className="bg-info" style={{minHeight: "83vh"}}>
          <AppRouter changeMovieDetail={this.changeMovieDetail} arrayPopular={this.state.arrayPopular} arrayUpcoming={this.state.arrayUpcoming} movie={this.state.movie} arraySearch={this.state.arraySearch}/>
        </main>
        <RenderFooter/>
      </div>
    );
  }
}
export default App;
