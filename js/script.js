let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

   while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {}, 
   actors: {},
   genres: [],
   privat: true,   
   toggleVisibleMyDB: function(){
      if(personalMovieDB.privat == false){
         personalMovieDB.privat = true;
      } else{
         personalMovieDB.privat = false;
      }
   },
   rememberMyFilms: function() {
      for(let i = 0; i < 2; i++){
         const a = prompt("Какой последний фильм вы посмотрели?"),
            b = prompt("На сколько бы вы его оценили?");
      
         if (a != null && b != null && a != "" && b != "" && a.length < 50){
           personalMovieDB.movies[a] = b;
         } else {
          i--;
         }
      
      }
   },
   detectPersonalLevel: function() {
      if (personalMovieDB.count <= 10){
         console.log ('Просмотренно слишком мало фильмов.');
      } else if (personalMovieDB.count < 30){
         console.log ('Вы классический зритель.');
      } else if (personalMovieDB.count > 29){
         console.log ('Вы киноман.');
      } else {
         console.log ('Возникла ошибка.');
      }
   },
   showMyDB: function() {
      if(personalMovieDB.privat == false){
         console.log(personalMovieDB);
      } else{
         console.log("Ошибка");
      }
   },
   writeYourGenres: function() {
      for (let i = 1; i <= 3; i++){
         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
         if(genre != "" && genre != null){
            personalMovieDB.genres[i - 1] = genre;
         } else{
            i--;
         }
      }

      personalMovieDB.genres.forEach((item, i) =>{
         console.log(`Любимый жанр #${i + 1} - это ${item}`);
      });
   }
}; 

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.rememberMyFilms();
 
personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();