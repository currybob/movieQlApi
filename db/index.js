// export let movies = [
//   {
//     id: 0,
//     name: 'terminal',
//     score: 27,
//   },
//   {
//     id: 1,
//     name: 'identity',
//     score: 20,
//   },
//   {
//     id: 2,
//     name: 'dark_night',
//     score: 27,
//   },
//   {
//     id: 3,
//     name: 'source code',
//     score: 30,
//   },
// ];

// export const getById = id => movies.filter(movie => movie.id === id)[0];

// export const deleteMovie = id => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   }

//   return false;
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: `${movies.length + 1}`,
//     name,
//     score,
//   };

//   movies.push(newMovie);
//   return newMovie;
// };

import fetch from 'node-fetch';
const API_URL = 'https://yts.am/api/v2/list_movies.json?';

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit) {
    REQUEST_URL += `limit=${limit}`;
  }

  if (rating) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};
