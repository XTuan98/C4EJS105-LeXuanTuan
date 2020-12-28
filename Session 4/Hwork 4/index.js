// 1. for and Object
// Run the following code, observe and then answer the questions
// const product = {
//     name: 'Xiaomi rice cooker', price: 1700, brand: 'Xiaomi', color: 'white'
// };

// for (let x in product) {
// console.log(x);
// }
// 1.1 x reprresent for property
// 1.2 Use the for loop to print/log out the following output
// for (let x in product) {
//     console.log(x + ' : ' + product[x]);
//     }

//2. Learn about destructuring object in the following tutorials:
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Le Xuan Tuan',
//     assignTo: 'Le Tung Duong',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
//     };

// let {subject,dueDate,assignTo} = task;
// console.log(subject)
// console.log(dueDate)
// console.log(assignTo)

// 3. 
// 3.1 Object
// 3.2 Array of object
// 3.3
// for (i = 0; i < jobSearch.hits.length; i++) {
//     console.log(jobSearch.hits[i].jobTitle)
//     console.log(jobSearch.hits[i].salaryMax)
//     console.log(jobSearch.hits[i].salaryMin)
//     console.log(jobSearch.hits[i].locations)
//     console.log(jobSearch.hits[i].skills)
// }

//4
// let dictionary = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for ‘error’',
//     pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//     ui_ux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// }
// 4.1
// alert('Hi there. This is a dictionary')

// while (true) {
//     let check = prompt('Enter a keyword').toLowerCase();
//     if (dictionary[check] == undefined) {
//         alert('We could not find your word')
//     }
//     else {
//         alert(dictionary[check]);
//     }
// }

// 4.2
// alert('Hi there. This is a dictionary')

// while (true) {
//     let check = prompt('Enter a keyword').toLowerCase();
//     if (dictionary[check] == undefined) {
//         let newWord = prompt('We could not find your word, leave your explaination here')
//         dictionary[check] = newWord
//     }
//     else {
//         alert(dictionary[check]);
//     }
// }


//5
let products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger',
    },
    {
        name: 'VSmart Active 1',
        brand: 'Vsmart',
        price: 5487,
        color: 'Black',
        category: 'Phone',
    },
    {
        name: 'Iphone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone',
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone',
    }
]

//5.1
// for (i in products) {
//     console.log(products[i].name)
//     console.log(products[i].price)
// }

// 5.2
// let nhap_so = prompt('nhap vi tri san pham')
// console.log('name: '+ products[nhap_so].name)
// console.log('brand: '+ products[nhap_so].brand)
// console.log('price: '+ products[nhap_so].price)
// console.log('color: ' +products[nhap_so].color)
// console.log('category: '+ products[nhap_so].category)

//5.3
// let nhap_tinh_nang = prompt('nhap tinh nang san pham')
// for (i in products) {
//     console.log(products[i].name)
//     console.log(products[i][nhap_tinh_nang])
//     console.log('----------')
// }

//5.4
// products[0].Providers = 'Phukienzero, Dientuccc'
// products[1].Providers = 'tgdt, Ddghn, VhStore'
// products[2].Providers = 'tgdt'
// products[3].Providers = 'tgdt'

// for (i in products) {
//     console.log(products[i].name)
//     console.log(products[i].Providers)
//     console.log('----------')
// }

//6

let job = [{
    name: 'HTML',
    Complete: false,
},
{
    name: 'CSS',
    Complete: false,
}
    , {
    name: 'Basics of JS',
    Complete: false,
},
{
    name: 'NPM',
    Complete: false,
},
{
    name: 'Git',
    Complete: false,
}]

// for (i in job){
// console.log(job[i].name)
// console.log(job[i].Complete)
// console.log('----')
// }
