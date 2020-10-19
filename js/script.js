'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
        do {
            money = prompt('Ваш месячный доход?');
        } while (!isNumber(money));
        return money;
    };

let appData = {
    budget: start(),        //  budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function() {

        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemIncome = prompt('Какой у вас дополнительный зароботок?', 'Таксую');
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

        
        for (let i = 0; i < 2; i++) {

                let itemExpenses = prompt('Введите обязательную статью расходов?');
                let cashExpenses;   

                do {
                    cashExpenses = prompt('Во сколько это обойдется?'); // 4
                }
                while (!isNumber(cashExpenses));
                appData.expenses[itemExpenses] = cashExpenses; // 3
        }
    },

    // Складывает все значения number в expensesMonth:
    getExpensesMonth: function() {

        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key]; // 2
        }
    },
    getBudget: function() {
        // start() - расходы за месяц
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);     //!ошибка budgetMonth вместо expensesMonth
    },

    getTargetMonth: function() {
        return Math.floor(appData.mission / appData.budgetMonth);
    },

    getStatusIncome: function() {
        if (appData.budgetDay >= 1200) {
            return ('У Вас высокий уровень дохода');
        } else if (appData.budgetDay > 600 || appData.budgetDay === 600) {
            return ('У Вас средний уровень дохода');
        } else if (appData.budgetDay > 0 || appData.budgetDay === 0) {
            return ('К сожалению, у Вас уровень дохода ниже среднего');
        } else {
            return ('Что-то пошло не так');
        }
    },

    getInfoDeposit: function() {
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?', 10);
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        }
    },

    calcSavedMoney: function () {
        return Number(appData.budgetMonth) * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() >= 0) {
    console.log('Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяца');
} else {
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + ': ' + appData[key]);
}