import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './Home.js';
import Popular from './Popular.js';
import Upcoming from './Upcoming.js';
import Search from './Search.js';
import MovieDetail from './MovieDetail.js';

class AppRouter extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" render={props =><Home changeMovieDetail={this.props.changeMovieDetail} arrayPopular={this.props.arrayPopular} arrayUpcoming={this.props.arrayUpcoming}/>}/>
                <Route path="/populares" render={props =><Popular changeMovieDetail={this.props.changeMovieDetail} arrayPopular={this.props.arrayPopular}/>}/>
                <Route path="/novedades" render={props =><Upcoming changeMovieDetail={this.props.changeMovieDetail} arrayUpcoming={this.props.arrayUpcoming}/>}/>
                <Route path="/pelicula" render={props =><MovieDetail movie={this.props.movie}/>}/>
                <Route path="/buscar" render={props =><Search changeMovieDetail={this.props.changeMovieDetail} arraySearch={this.props.arraySearch}/>}/> 
            </Switch>
        )
    }
}  
export default AppRouter;