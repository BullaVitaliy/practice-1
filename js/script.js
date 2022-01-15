// practice-1

//1----------------перше питання до користувача
const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', ''); //+promot перетворює пустий рядок в 0
// ок = вертає '', скасувати = вертає null

//2----------------умовна база даних
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//3----------------питання до глядача---цикл-умова
//-----for(;;){}
for (let i = 0; i < 2; i++){
    const a = prompt('Один із останіх фільмів?', ''),
          b = prompt('На скільки оцінете його?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;//віднімає одну ітерацію якщо не виповнились всі умови
    }
}

//-----while(){}
// let i = 0;
// while (i < 2) {
//     const a = prompt('Один із останіх фільмів?', ''),
//           b = prompt('На скільки оцінете його?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('error');
//         i--;//віднімає одну ітерацію якщо не виповнились всі умови
//         }

//     i++;
// }


//-----do{}while()
// let i = 0;
// do {
//     const a = prompt('Один із останіх фільмів?', ''),
//           b = prompt('На скільки оцінете його?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     } else {
//         console.log('error');
//         i--;//віднімає одну ітерацію якщо не виповнились всі умови
//         }
    
//         i++;
// } while (i < 2);

//4------------------оцінка глядача
if(personalMovieDB.count >= 30) {
    alert('Ви кіноман');
} else if(personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    alert('Ви класний глядач!');
} else if(personalMovieDB.count < 10) { //&& personalMovieDB.count >= 1
    alert('Переглянуто досить мало фільмів');
} else {
    alert('Відбулась помилка');
}

console.log(personalMovieDB);//виводимо в консоль умовну базу даних(об'єкт)
    