const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
console.log(numberOfFilms);
const personalMovieDB = {
   count: numberOfFilms,
   movies: {}, 
   actors: {},
   genres: [],
   privat: false
};
const a = prompt("Какой последний фильм вы посмотрели?");
const b = prompt("На сколько бы вы его оценили?");
const c = prompt("Какой последний фильм вы посмотрели?");
const d = prompt("На сколько бы вы его оценили?");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);