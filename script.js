let numberOfFilms;
while (numberOfFilms == undefined || numberOfFilms == '' || numberOfFilms == 0 || isNaN(numberOfFilms)) {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  provet: false    
};

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
  
  
  



console.log(personalMovieDB);


