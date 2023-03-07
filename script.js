'use strict';

let numberOfFilms;
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false    
};

// start();
// rememberMyFilms();
// detectPersonalLevel();
writeYourGenres();
showMyDB();

function start() {
  while (numberOfFilms == null || numberOfFilms == undefined || numberOfFilms == '' || numberOfFilms == 0 || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  } 
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastMovie = prompt('Один из последних просмотренных фильмов?','');
    if (lastMovie == '' || lastMovie == null || lastMovie.length > 50) {
      i--; 
      continue;
    }
    for (let k = 0; k < 1; k++) {
      let gradeMovie = +prompt('На сколько оцените его?','');
      if (isNaN(gradeMovie) || gradeMovie == 0) {
        k--;
      }
      personalMovieDB.movies[lastMovie] = gradeMovie;
    }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('Классический зритель');
  } else {
    alert('Киноман');
  }
}

function showMyDB() {
  if (!personalMovieDB.privet) console.log(personalMovieDB);
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр? Под номером: ${i + 1}`)
    if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '' || Number(+personalMovieDB.genres[i])) {
      i--;
    }
  }
}




  






