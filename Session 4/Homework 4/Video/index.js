//Video 1: Object - Init (after 7)
// let movie = { title: 'The walking dead', year: 2020, rate: 8.2 }

//Video 2: Object - Read (after 9)
//2.1 Log all of 3 the properties of the movie object to the console using 2 different ways
// for (i in movie) {
//     console.log(i + ' : '+ movie[i])
// }


//2.2 Log an non-existent property of the movie, director, what is the result? object: undefined
// console.log(movie.director)

//2.3 check whether a value is undefined (has no value) or not by using if - else pair

// let check = prompt('what you want to know').toLowerCase()
// if(check == 'title') {
//     alert(movie.Title)
// } else if (check=='year') {
//     alert(movie.Year)
// } else if (check == 'rate') {
//     alert(movie.rate)
// } else alert (check + ' is not exist')

//Video 3: Object - Update (after 10)

// movie.rate = 8.7
// //Change the rate of the movie to 8.7
// console.log(movie.rate)
// //Increase the rate of the movie by 0.5
// movie.rate = movie.rate+0.5
// console.log(movie.rate)

// 3.2 asking users what they want to update and what is the update, perform the update and then log out the result
// let ask = prompt('what function do you want to change? ').toLocaleLowerCase()
// let detail = prompt('What is the update? ')
// movie[ask] = detail
// console.log(movie)

//Video 4: Object - Create (after 11)

// Upgrade Update script to check whether the property entered by users exist, 
// if yes, perform as usual, if no, tell them that we will add new and perform create

// let ask = prompt('what function do you want to change? ').toLocaleLowerCase()
// if (ask in movie) {
//     let detail = prompt('What is the update? ')
//     movie[ask] = detail
// }


// Video 5: Array of Objects (after 4)
//1 create array of Objects
// let movie = [{ title: 'The walking dead', year: 2020, rate: 8.2 }, { title: 'How i met your mother', year: 2000, rate: 9.2 }, { title: 'Friends', year: 1998, rate: 8.5 }]

//2 Print or log out the first movie from movie lis
// console.log(movie[0])
//3 Print or log out the title of the last movie from movie list
// console.log(movie[movie.length-1].title)

//4 Use a loop to print or log out all of the movie in the movie list
// for (phim of movie) {
//     console.log(phim.title)
// }

//5 Use a loop to print or log out all of the movie in the movie list, 
//the data is prettified as follow
// for (phim of movie) {
//     console.log(phim.title)
// }

// for (phim in movie) {
//     console.log( movie[phim].title)
//     console.log('year: ' +movie[phim].year)
//     console.log('rate: ' +movie[phim].rate)
//     console.log('-------------------')
// }

// 6 Increase the rate of the last movie in the movies list by 0.7
// movie[movie.length-1].rate = movie[movie.length-1].rate+0.7
// console.log(movie[movie.length-1])

//Video 6: Object containing array
// Create an object named movie, with title, year and rate and characters.
//  The characters contain at least 3 characters of the movie
// let movie = { title: 'The walking dead', year: 2020, rate: 8.2 , Casts: ['Billy','Jame','Jena']}
// console.log(movie.title)
// console.log(movie.year)
// console.log(movie.rate)
// console.log(movie.Casts[1])

// Video 7: Object and Array mix structure
let movie = [{ title: 'The walking dead', year: 2020, rate: 8.2, casts:'billy' },
             { title: 'How i met your mother', year: 2000, rate: 9.2, casts:'henrry' }, 
             { title: 'Friends', year: 1998, rate: 8.5, casts:'lena' }]

for (phim in movie) {
    console.log( movie[phim].title)
    console.log('year: ' +movie[phim].year)
    console.log('rate: ' +movie[phim].rate)
    console.log('casts: '+movie[phim].casts)
    console.log('-------------------')
}