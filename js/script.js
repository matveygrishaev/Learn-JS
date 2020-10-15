'use strick';

'use strict';

//lesson05 

/* Функция проверяет на:
!isNaN, восклицательный знак говорит, что если это число, возвращается true, если строка или что-то другое вернет false
isFinite(): если число конечное, то true и если бесконечное, то false */
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке'),
    mission = 50000,
    period = 3;

// Задание №1
let start = function() {

    do {
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));

};

start();

let showTypeOf = function(item) {
    console.log(typeof item);
};

// let expenses1 = prompt('Введите обязательную статью расходов?'),
//     expenses1Amount = +prompt('Во сколько это обойдется?'),
//     expenses2 = prompt('Введите обязательную статью расходов?'),
//     expenses2Amount = +prompt('Во сколько это обойдется?');

let expenses = [];

// Расходы за месяц getExpensesMonth
let getExpensesMonth = function() {
    // Переменная sum, которая суммирует расходы
    let sum = 0;

    // С помощью цикла будем задавать вопрос про расходы и складывать сумму расходов
    for (let i = 0; i < 2; i++) {
        
        // Способ №1:

        /* 
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?');
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?');
         } 
        */

        // Способ №2:
        expenses[i] = prompt('Введите обязательную статью расходов?');

        while (!isNumber(sum)) {
            sum = sum + prompt('Во сколько это обойдется?');
        }

    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

    // Сбережения за месяц
let getAccumulatedMonth = function() {
    return money - expensesAmount;
};
    // Значение переменной приравнивается результату функции 
let accumulatedMonth = getAccumulatedMonth();

    // Рассчет периода достижения цели
let getTargetMonth = function() {
  return mission / accumulatedMonth;
};

if (getTargetMonth < 0) {
    console.log('Цель не будет достигнута');
} else {'Цель будет достигнута';}