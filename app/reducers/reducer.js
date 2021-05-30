import { combineReducers } from 'redux';
import { selectGenre } from '../actions/action';
import MovieCollection from "../data/movieCollection";

const INITIAL_STATE = {
    genres: MovieCollection.genres,
    movies: MovieCollection.movies,
    selectedGenres: []
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {    
    case "SELECT_GENRE":      
      const {selectedGenres} = state;

      if(selectedGenres.includes(action.payload)){           
        selectedGenres.splice(selectedGenres.indexOf(action.payload), 1);                
      } else {
        selectedGenres.push(action.payload)        
      }      
      return {...state, selectedGenres: [...selectedGenres]};      

    case "CLEAR_SELECTED_GENRES":
        return {...state, selectedGenres: []}        
        
    case "ADD_MOVIE":
        const {movies} = state;
        movies.unshift({...action.payload, id: movies.length+1})        
        return {...state, movies: [...movies]}

    default:
      return state
  }
};

export default combineReducers({
  app: appReducer
});