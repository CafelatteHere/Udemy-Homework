let money = prompt("Ваш бюджет на месяц?", ' '),
    time = prompt("Введите дату в формате YYYY-MM-DD", ' '),
    expensesQuestion1 = prompt("Введите обязательную статью расходов в этом месяце", ' '),
    expensesQuestion2 = prompt("Во сколько обойдется?", ' ');

let appData = { 
    budget: money,
    timeData: time,
    expenses: {
        expensesQuestion1: expensesQuestion2,
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

let budgetPerDay =  (appData.budget/30);
alert(`Ваш бюджет на день: ${budgetPerDay}`);

