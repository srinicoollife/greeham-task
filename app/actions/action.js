export const addNewMovie = movie => (
    {
      type: 'ADD_MOVIE',
      payload: movie,
    }
);
export const selectGenre = genre => (
    {
      type: 'SELECT_GENRE',
      payload: genre,
    }
);

export const clearSelectedGenres = () => (
  {
    type: 'CLEAR_SELECTED_GENRES',
    payload: null,
  }
);
