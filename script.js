// --- 1 --------------------------------------------------------------------

// let string = `функция которая принимает строку и выводит статистику о ней, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9`;
let alphabet1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphabet2 = 'abcdefghijklmnopqrstuvwxyz';
let alphabet3 = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
// let alphabet4 = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// let numbers = '0123456789 ';

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

// let numbers = [
//     "ноль",
//     "один",
//     "два",
//     "три",
//     "четыре",
//     "пять",
//     "шесть",
//     "семь",
//     "восемь",
//     "девять",
//     "десять",
//     "одиннадцать",
//     "двенадцать",
//     "тринадцать",
//     "четырнадцать",
//     "пятнадцать",
//     "шестнадцать",
//     "семнадцать",
//     "восемьнадцать",
//     "девятнадцать",
//     "двадцать",
//     "тридцать",
//     "сорок",
//     "пятьдесят",
//     "шестьдесят",
//     "семьдесят",
//     "восемьдесят",
//     "девяносто"
//   ];

// function transformNumrestoWord(number) {
//     let result = ''
//     if(number > 9 && number < 20) {
//         return result = numbers[number];
//     }
//     if(number >= 20 && number <= 99){
//         let firstnumber = Math.floor(number / 10);
//         let secondnumber = number % 10;
//         if(number % 10 === 0){
//             return numbers[firstnumber + 18];
//         }
//         else return numbers[firstnumber + 18] + ' ' + numbers[secondnumber];
//     }
//     return 'Введите двузначное число';
// }
// for (let i = 10; i < 100; i++) {
//     console.log(i + ' - ' + transformNumrestoWord(i));
// }


// --- 3 --------------------------------------------------------------------


// let str = '12, 84, 99 текст написанный ПРОПИСНЫМИ буквами  и цифры: 1, 2, 3, 4';

// function transformCase(str) {
//     let newstr = '';
//     str.split('').forEach(element => {
        
//         if((element - 0)){
//             newstr += '_';
//         }
//         else if(element.toUpperCase() === element) {
//             newstr += element.toLowerCase();
//         }
//         else newstr += element.toUpperCase();
//     });
//     return newstr;
// }

// console.log(transformCase(str));


// --- 4 --------------------------------------------------------------------

let string = 'font-size';

// function wordTtransformation(str) {
//     let value = str.split('-')[1].split('').splice(1,).join('');
//     let result = str.split('-')[0] + str.split('-')[1][0].toUpperCase() + value;
//     return result;
// }

// console.log(wordTtransformation(string));


// --- 5 --------------------------------------------------------------------

let str = 'объектно-ориентированное программирование';

// function transformAbb(str) {
//     let temp = str.split(/[-\s]/);
//     console.log(temp);
//     let result = '';
//     temp.forEach(element => {
//         if(element){
//         result += element[0].toUpperCase();
//         }
//     });
//     return result;
// }

// console.log(transformAbb(str));

// --- 6 --------------------------------------------------------------------

// function sumAll(...args) {
//     let sum = '';  
//     for (let arg of args) sum += arg;
//     return sum;
//   }

// console.log(sumAll(alphabet1, alphabet2, alphabet3));
// console.log([...string]);
// console.log(Array.from(string));
// console.log(string.split(''));


// --- 7 --------------------------------------------------------------------


// let task = ' 45 * 13 ';

// function calc(str) {
//     let firstnumber = Number(str.match(/\d+(?=\D)/g)[0]);
//     console.log(firstnumber);
//     let secondnumber = Number(str.match(/\d+(?=\D||$)/g)[1]);
//     console.log(secondnumber);
//     let operator = str.match(/[\+\-\*\/]/)[0];
//     let result = 0;
//     switch (operator) {
//         case '+': result = firstnumber + secondnumber; break;
//         case '-': result = firstnumber - secondnumber; break;
//         case '*': result = firstnumber * secondnumber; break;
//         case '/': result = firstnumber / secondnumber; break;
//         default: break;
//     }
//     return result;
// }

// console.log(calc(task));

let url = 'https://itstep.org/ua/about'

function getInfoUrl(str) {
    
}