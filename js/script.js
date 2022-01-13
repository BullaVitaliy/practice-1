// practice-1

//1
const numberOfFilms = +prompt('Скільки фільмів ви вже переглянуди?', '');


//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//3
let a = prompt('Один із останіх фільмів?', ''),
    b = prompt('На скільки оцінете його?', ''),
    c = prompt('Один із останіх фільмів?', ''),
    d = prompt('На скільки оцінете його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);