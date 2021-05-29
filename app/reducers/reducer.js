import { combineReducers } from 'redux';
import MovieCollection from "../data/movieCollection";

const INITIAL_STATE = {
    genres: MovieCollection.genres,
    movies: MovieCollection.movies
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {    
    default:
      return state
  }
};

export default combineReducers({
  app: appReducer
});