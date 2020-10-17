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
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: [],
    getExpensesMonth: function() {

        let sum = 0;
        let sum2 = 0;

        for (let i = 0; i < 2; i++) {
            
            appData.expenses[i] = prompt('Введите обязательную статью расходов?', 'Аренда');

            do {
                sum2 = prompt('Во сколько это обойдется?', 3000);
            }
            while (!isNumber(sum2));
            sum = Number(sum) + Number(sum2);

        }
        console.log(appData.expenses);
        return sum;
    },
    getAccumulatedMonth: function() {
        return money - expensesAmount;
    },
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    getTargetMonth: function() {
        return appData.mission / accumulatedMonth;
    },
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке');
    },
    getStatusIncome: function() {
            if (getTargetMonth() > 0) {
                console.log('Цель будет достигнута')
            } else {
                console.log('Цель не будет достигнута');
            }
    }
};

appData.asking()

let expensesAmount = appData.getExpensesMonth();

console.log('Расходы за месяц: ', expensesAmount);

let accumulatedMonth = appData.getAccumulatedMonth();
console.log('Сбережения за месяц: ', accumulatedMonth);
