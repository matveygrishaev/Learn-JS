'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
        do {
            money = prompt('Ваш месячный доход?', 50000);
        } while (!isNumber(money));
    };

start();



let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке');
    }
};


let showTypeOf = function(item) {
    console.log(typeof item);
};

showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit);

let expenses = [];

// Расходы за месяц getExpensesMonth
let getExpensesMonth = function() {
    // Переменная sum, которая суммирует расходы
    let sum = 0;
    let sum2 = 0;

    // С помощью цикла будем задавать вопрос про расходы и складывать сумму расходов
    for (let i = 0; i < 2; i++) {
        
        expenses[i] = prompt('Введите обязательную статью расходов?', 'Аренда');

        do {
            sum2 = prompt('Во сколько это обойдется?', 3000);
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
    return appData.mission / accumulatedMonth;
};
console.log('Период достижения цели: ', getTargetMonth());

if (getTargetMonth() > 0) {
    console.log('Цель будет достигнута');
    } else {console.log('Цель не будет достигнута');
}