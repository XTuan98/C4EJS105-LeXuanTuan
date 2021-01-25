//Bài 1.1

// let promise = new Promise(function(resolve, reject) {
// setTimeout(() =>{ resolve("Promise is da best")} , 5000);
// }); promise.then(alert);
//1.3 dùng .then
// const promise1 = new Promise(function(resolve, reject){
//     resolve('Promise is da best');
// });
// promise1.then((value) =>{
//     alert(value);
// });


//1.2:
// {
//     async function Promise(){
//         await wait(500);
//         return "is da best";
//     }
// }
//Bài 2:
// let fetchdata = 'https://jsonplaceholder.typicode.com/comments'
// fetch(fetchdata)
// .then(function(response){
//     return response.json();
// })
// .then(function(comments){
//     console.log(comments);

//     var htmls = comments.map(function(comments){   //Hiển thị giao diện người dùng web
//         return `<li>
//         <h2>${comments.email}</h2>
        
//         </li>`;
//     });
//     var html =htmls.join('');
//     document.getElementById('data-block').innerHTML = html;
// });

//Bài 3:
//https://sheetdb.io/api/v1/b3520g5vq5fbo
// Bài 4:
// function randomNum()
// {
// let randomNum = Math.random()* 10;
// console.log(randomNum);
// return(randomNum);
// }
// const x = randomNum();
// if(x < 0) {
//     console.log('Failed: the number is smaller than 0');
// }else if(x > 10){
//     console.log('Failed: the number is bigger than 10');
// }
// else{
//     console.log('Passed, bravo');
// }


//Bài 5:
// function doRandom(a, b){
//     let randomNum1 = Math.random()*(b - a )+ a;
//     console.log(randomNum1);
//     return randomNum1;
    
// }
// const x = doRandom(4, 16);
// if(x < 4){
//     console.log('Failed');
// }else if(x > 16){
//     console.log('Failed');
// }else{
//     console.log('Passed, bravo');
// };
//Bài 6:
// function doDistance(x1, y1, x2, y2){
//     let distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
//     console.log(distance);
//     return distance;
// }
// const a = doDistance(3 , 10 , 0 , 6);
// if(a !== 5){
//     console.log('Failed: the calculation is wrong');
// }
// else{
//     console.log('Passed, bravo');
// }