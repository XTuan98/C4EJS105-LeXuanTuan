//bai 1
// a = document.getElementById('a');
// b = document.getElementById('b');
// c = document.getElementById('c');
// let count = 0;
// b.addEventListener('click', () => {
//     count++;
//     d.innerHTML = count;
// })
// a.addEventListener('click', () => {
//     count--;
//     d.innerHTML = count;
// })

//bai 2
// a = document.getElementById('a');
// b = document.getElementById('b');
// nhapvao = document.getElementById('nhapvao');
// zero = document.getElementById('zero');
// let time = 0;
// a.addEventListener('click', () => {
//     if(nhapvao.value == '' || nhapvao.value <= 0) {
//         alert('vui long nhap so lai');
//     } else {
//         a.disabled = true;
//         b.disabled = false;
//         time = nhapvao.value;
//         zero.innerHTML = time
//         let dunglai = setInterval(() =>{
//             time--;
//             zero.innerHTML = time;
//             if(time == 0) {
//                 clearInterval(dunglai);
//                 zero.innerHTML = 'Time up';
//                 a.disabled = false;
//                 b.disabled = true;
//             };
//         }, 1000);
//         b.addEventListener('click', () => {
//         a.disabled = false;
//         b.disabled = true;
//         clearInterval(dunglai);
//         zero.innerHTML = 'Stop!!!';
//     });
// }
// });

//bai 3
// const quote = document.getElementById('quote');
// const author = document.getElementById('author');
// const reload = document.getElementById('reload');

// function show_quote() {
//     random_quote = data[Math.floor(Math.random() * data.length)];
//     quote.innerHTML = random_quote.quoteText;
//     author.innerHTML = random_quote.quoteAuthor;
// };

// show_quote();
// reload.addEventListener('click', show_quote)

//bai 4
Newproject = document.getElementById('new_project');
Newtask = document.getElementById('new_task');
Newtime = document.getElementById('new_time');
add = document.getElementById('add_btn');
clear = document.getElementById('clear_btn');
body = document.getElementById('body');
let timeSheetData = [{
    project: 'Learn front-end',
    task: 'Learn HTML',
    time_spent: '6'
}, {
    project: 'Learn front-end',
    task: 'Learn CSS',
    time_spent: '8'
}, {
    project: 'Learn front-end',
    task: 'Learn JS Variables and Data types',
    time_spent: '6'
}, {
    project: 'Learn git',
    task: 'Learn git basics',
    time_spent: '2'
}];
let update1 = 0;
let update2;
function update3() {
    body.innerHTML = '';

for(let data of timeSheetData) {
    body.insertAdjacentHTML('beforeend', `<tr><td>${data.project}</td><td>${data.task}</td><td>${data.time_spent}</td><td><button class = "delete">X</button><button class = "update">U</button></td><tr>`);
};
remove1 = document.getElementsByClassName('delete');
update4 = document.getElementsByClassName('update');
for(let i = 0; i < remove1.length; i++) {
    remove1[i].addEventListener('click', () => {
        timeSheetData.splice(i, 1);
        update3();
    })
}
    for(let i = 0; i < update4.length; i++) {
        update4[i].addEventListener('click', () => {
             update1 = i;
             update2 = false;
            Newproject.value = timeSheetData[i].project;
            Newtask.value = timeSheetData[i].task;
            Newtime.value = timeSheetData[i].time_spent;

        });
    };
}


update3();
console.log(update2);
add.addEventListener('click', () => {
    if(Newproject.value == '' || Newtime.value == '' || Newtask.value == '') {
        alert('vui long nhap day du');
   
   } else if (update2 == false){
       timeSheetData[update1] = {project: Newproject.value, task: Newtask.value, time_spent: Newtime.value};
       console.log(timeSheetData);
       update3();
       Newproject.value = '';
       Newtask.value = '';
       Newtime.value = '';
   } else {
    timeSheetData.push({project: Newproject.value, task: Newtask.value, time_spent: Newtime.value});
    console.log(timeSheetData);
    update3();
    Newproject.value = '';
    Newtask.value = '';
    Newtime.value = '';
   };
}
       );
       clear.addEventListener('click', () => {
           Newtime.value = '';
           Newproject.value = '';
           Newtask.value = '';
       })