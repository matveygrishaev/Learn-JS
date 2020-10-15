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

let expenses = [];

// Расходы за месяц getExpensesMonth
let getExpensesMonth = function() {
    // Переменная sum, которая суммирует расходы
    let sum = 0;
    let sum2 = 0;

    // С помощью цикла будем задавать вопрос про расходы и складывать сумму расходов
    for (let i = 0; i < 2; i++) {
        
        expenses[i] = prompt('Введите обязательную статью расходов?');

        do {
            sum2 = prompt('Во сколько это обойдется?');
        }
        while (!isNumber(sum2));
        sum = Number(sum) + Number(sum2)

    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ', expensesAmount);

    // Сбережения за месяц
let getAccumulatedMonth = function() {
    return money - expensesAmount;
};

    // Значение переменной приравнивается результату функции 
let accumulatedMonth = getAccumulatedMonth();
console.log('Сбережения за месяц: ', accumulatedMonth);

    // Рассчет периода достижения цели
let getTargetMonth = function() {
    return mission / accumulatedMonth;
};
console.log('Период достижения цели: ', getTargetMonth());

if (getTargetMonth() > 0) {
    console.log('Цель будет достигнута');
    } else {console.log('Цель не будет достигнута');
}