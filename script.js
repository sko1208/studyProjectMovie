let numberOfFilms;
while (numberOfFilms == undefined || numberOfFilms == ' ') {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  if (numberOfFilms == 0) {
    break;
  }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  provet: false    
};

// for (let i = 0; i < 2; i++) {
//   let lastMovie = prompt('Один из последних просмотренных фильмов?','')
//   let gradeMovie = +prompt('На сколько оцените его?','');
//   personalMovieDB.movies[lastMovie] = gradeMovie;
// }


console.log(personalMovieDB);


