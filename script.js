'use strict';

let numberFirst;
do {
    numberFirst = Number(prompt('Введите первое число'));//Введение первого числа prompt и преобразование в число
} while (isNaN(numberFirst));

let numberSecond;
do {
    numberSecond = Number(prompt('Введите второе число'));//Введение второго числа prompt и преобразование в число
} while (isNaN(numberSecond));


function calcSum(numberFirst, numberSecond) {//функция суммы двух чисел
    return numberFirst + numberSecond;//возвращаем результат суммы
}

function calcDifference(numberFirst, numberSecond) {//разница двух чисел
    return numberFirst - numberSecond;//возвращаем результат разницы
}

function calcMultiplication(numberFirst, numberSecond) {//умножение двух чисел
    return numberFirst * numberSecond;//возвращаем результат умножения
}

function calcDivision(numberFirst, numberSecond) {//деление двух чисел
    return numberFirst / numberSecond;//возвращаем результат деления
}

let mathAction;
do {
    mathAction = (prompt('Введите знак + - / *'));
    switch(mathAction){
        case '+' : 
            calcSum(numberFirst, numberSecond); 
            const resultSum = calcSum(numberFirst, numberSecond);
            alert(`Результат: ${numberFirst} + ${numberSecond} = ${resultSum}`);//вывод в модальное окно alert суммы
            break;
        case '-' : 
            calcDifference(numberFirst, numberSecond); 
            const resultDifference = calcDifference(numberFirst, numberSecond);
            alert(`Результат: ${numberFirst} - ${numberSecond}  =  ${resultDifference}`);
            break;
        case '/' : 
            calcDivision(numberFirst, numberSecond); 
            const resultDivision = calcDivision(numberFirst, numberSecond);
            alert(`Результат: ${numberFirst} / ${numberSecond} = ${resultDivision}`);
            break;
        case '*' : 
            calcMultiplication(numberFirst, numberSecond);
            const resultMultiplication = calcMultiplication(numberFirst, numberSecond);
            alert(`Результат: ${numberFirst} * ${numberSecond} = ${resultMultiplication}`); 
            break;
         default: 
             mathAction = 0;
    }
} while (mathAction == 0);
