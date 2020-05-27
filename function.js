// 1. Напишите функцию которая принимает параметр в виде числа.
// Если число от 18 включительно 60 выводит сообщение "Вы ввели верный возраст".
// Если меньше "Ваш возраст мал", если больше "Вы стары для этого сайта!))"

let randNumber = +prompt("Enter number: ", );

function defineAge(randNumber) {
    let age = randNumber;
    if (age>=18 && age<=60) {
        return "Вы ввели верный возраст"
    } else if (age<18) {
        return "Ваш возраст мал"
    }
        else
        return "Вы стары для этого сайта!"
}
console.log(defineAge(randNumber));

// 2.  Даны переменные a и b. Проверьте, что a делится без остатка на b.
//     Если это так - выведите 'Делится'и результат деления,
//     иначе выведите 'Делится с остатком' и остаток от деления.

let a = +prompt("Enter number a: ", );
let b = +prompt("Enter number b: ", );
let resDivide = a/b;
let moduleDivide = a%b;
if ((a%b) === 0) {
    console.log("Делится и результат деления: " + resDivide);
} else {
    console.log("Делится с остатком и остаток от деления равен " + moduleDivide);
}

// using function

function divide(a, b) {
    let resDivide = a/b;
    let moduleDivide = a%b;
    if ((a%b) === 0) {
        return "Делится и результат деления: " + resDivide;
    } else {
        return "Делится с остатком и остаток от деления равен " + moduleDivide;
    }
}
console.log(divide(a,b));

// 3. Нарисуйте в консоли прямоугольный треугольник из звездочек
// (или плюсиков, или какого другого символа):
// на первой строчке - одна звездочка, на второй две, и так далее.
// Решение оформите в виде функции, куда передаются два параметра:
// высота треугольника и символ, которым его нужно "рисовать".
//     Как-то так:
//     drawTriangle(5,*);
// *
// **
// ***
// ****
// ******

let height = +prompt("Enter height: ",'');
let anySymbol = prompt("Enter symbol: ",'');

function drawTriangle(height, anySymbol) {
    let icon = '';
    for (let i=0; i <= height; i++) {
        for (let j = 0; j<i; j++) {
            icon+=anySymbol;
        }
        icon+= '\n';
    }
    return icon + '\n'

}
console.log(drawTriangle(height, anySymbol));


// 4. Дано число n = 1000. Делите его на 2 столько раз, пока результат
// деления не станет меньше 50. Какое число получится?
//    Посчитайте количество итераций, необходимых для этого.

// via for
let n = 1000;
let amountIteration = 0;

for (let i = 0; n>50; i++) {
    n/=2;
    amountIteration++;
}

console.log('Результат деления: ' + n);
console.log('Amount iteration: ' + amountIteration);

// via while

let num = 1000;
let amountIteration1 = 0;
while(num>50) {
    num /=2;
    amountIteration1++;
}

console.log('Divide result: ' + num);
console.log('Amount iteration: ' + amountIteration1);

// using function

function task() {
    let n = 1000;
    let amountIteration = 0;

    for (let i = 0; n>50; i++) {
        n/=2;
        amountIteration++;
    }
    return {n, amountIteration};

}
console.log(task());