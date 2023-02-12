let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  provet: false    
};

let lastMovie1 = prompt('Один из последних просмотренных фильмов?','');
let gradeMovie1 = +prompt('На сколько оцените его?','');

let lastMovie2 = prompt('Один из последних просмотренных фильмов?','');
let gradeMovie2 = +prompt('На сколько оцените его?','');

personalMovieDB.movies[lastMovie1] = gradeMovie1;
personalMovieDB.movies[lastMovie2] = gradeMovie2;



console.log(personalMovieDB);
