// document.write('<h1>Out with the old, in with the new!</h1>')
// document.write('<h2>Out with the old, in with the new!</h1>')
// document.write('<h1>Out with the old, in with the new!</h1>')

// let array =[
//     {
//         name: 'color',
//         value: 'red'
//     },
//     {
//         name: 'background-color',
//         value: 'blue'
//     },
//     {
//         name: 'font-size',
//         value: '24px'
//     }
// ]


// function printSomeText(stylesArray, text) {
//     let paragraph = '<p>' + text + '</p>'
//     let styles = '<style>p{'
//     for (style of stylesArray) {
//         styles += style.name + ':' + style.value + ';'
//     }
//     styles += '}</style>'
//     document.write(styles)
//     document.write(paragraph)
// }

// printSomeText(array, 'Hello asd')


// let array = [
//     { name: 'b', value: 12 },
//     { name: 'c', value: 11 },
//     { name: 'a', value: 13 },
//     { name: 'z', value: 14 },
//     { name: 'w', value: 15 },
// ]

// console.log(array.sort(function (a, b) {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     return 0;
//   }))

// let obj1 = {
//     c: 21,
//     d: 12
// }

// let obj2 = {
//     c: 21,
//     d: 12
// }

// function isEqual(object1, object2) {
//     for (let key in object1) {
//         if (key in object2) {
//             if (object1[key] !== object2[key]){
//                 return false 
//             }
//         }
//         else {
//             return false
//         }
//     }
//     return true
// }

// console.log(isEqual(obj1, obj2))

// function intersection(object1, object2) {
//     let result = {}
//     for (let key in object1) {
//         if (key in object2 && object1[key] === object2[key]) {
//             result[key] = object1[key] 
//         }
//     }
//     return result
// }

// console.log(intersection(obj1, obj2));


// obj1 = {
// 	a: '12',
// 	b: {
//         c: 21,
//         d: 12
// 	}
// }

// obj2 = {
// 	a: '12',
// 	b: {
//         c: 21,
//         d: 12
// 	}
// }


// function deepEqual(object1, object2) {
//     if (Object.keys(object1).length !== Object.keys(object2).length) {
//         return false
//     }
//     for (let key in object1) {
//         if (key in object2) {
//             if (typeof object1[key] !== 'object' && typeof object2[key] !== 'object') {
//                 if (object1[key] !== object2[key]){
//                     return false 
//                 }   
//             }
//             else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
//                if (!deepEqual(object1[key], object2[key])) {
//                    return false
//                }
//             }
//             else {
//                 return false
//             }
//         }
//         else {
//             return false
//         }
//     }
//     return true
// }

// console.log(deepEqual(obj1, obj2));

// function deepIntersection(object1, object2) {
//     let result = {}
//     for (let key in object1) {
//         if (key in object2) {
//             if(typeof object1[key] !== 'object' && typeof object2[key] !== 'object'){
//                 if (object1[key] === object2[key]) {
//                     result[key] = object1[key]
//                 }
//             }
//             else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
//                 let tempResult = deepIntersection(object1[key], object2[key])
//                 // for (let key in tempResult){
//                 //     result[key] = tempResult
//                 //     break
//                 // }
//                 if( Object.keys(tempResult).length !== 0) {
//                     result[key] = tempResult
//                 }
//             }
//         }
//     }
//     return result
// }

// console.log(deepIntersection(obj1, obj2));

// Русском
// Английском

// найти код буквы "а", найти код буквы "я", найти код буквы "А", найти код буквы "Я"
// найти код буквы 'a', найти код буквы 'z', найти код буквы 'A', найти код буквы 'Z'

// ЕСЛИ символ не входит в диапазон от а-я или А-Я или A-Z или a-z тогда это мусор

// map = new Map()

// console.log(typeof map);

// --- 1 --------------------------------------------------------------------

let string = `функция которая принимает строку и выводит статистику о ней, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9`;
let alphabet1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphabet2 = 'abcdefghijklmnopqrstuvwxyz';
let alphabet3 = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
let alphabet4 = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let numbers = '0123456789 ';

// function getStrCode(str) {
//     let result ='';
//     for (let i = 0; i < str.length; i++) {
//         result += str[i] + ' - ' + str.charCodeAt(i) + '\n';
//     }
//     return result;
// }

// console.log(getStrCode(alphabet1));
// console.log(getStrCode(alphabet2));
// console.log(getStrCode(alphabet3));
// console.log(getStrCode(alphabet4));
// console.log(getStrCode(numbers));

// function getInfoStr(str) {
//     let letters = 0;
//     let numbers = 0;
//     let symbols = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 123 || str.charCodeAt(i) > 1039 && str.charCodeAt(i) < 1104 || str.charCodeAt(i) === 1025 || str.charCodeAt(i) === 1105){
//             letters++;
//         }
//         else if(str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58){
//             numbers++;
//         }
//         else if(str.charCodeAt(i) !== 32){
//             console.log(str.charCodeAt(i) + ' - ' + str[i]);
//             symbols++;
//         }
//     }
//     return ` Letter - ${letters} \n Numbers - ${numbers} \n Symbols ${symbols}`;
// }
// console.log(getInfoStr(numbers));



// --- 2 --------------------------------------------------------------------



// --- 3 --------------------------------------------------------------------



// --- 4 --------------------------------------------------------------------

// let string = 'font-size';

// function wordTtransformation(str) {
//     let value = str.split('-')[1].split('').splice(1,).join('');
//     let result = str.split('-')[0] + str.split('-')[1][0].toUpperCase() + value;
//     return result;
// }

// console.log(wordTtransformation(string));


// --- 5 --------------------------------------------------------------------