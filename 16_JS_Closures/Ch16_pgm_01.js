// Closure with one inner function
function outerFunction() {
    let outerVar = 'I am outer';

    function innerFunction() {
        console.log(outerVar); // Inner function has access to outerVar
    }

    return innerFunction; // Return inner function
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am outer


// Closure with three inner functions
function outerFunction() {
    let outerVar = 'Outer variable';

    function innerFunction1() {
        console.log(outerVar + ' - Inner function 1');
    }

    function innerFunction2() {
        console.log(outerVar + ' - Inner function 2');
    }

    function innerFunction3() {
        console.log(outerVar + ' - Inner function 3');
    }

    return {
        inner1: innerFunction1,
        inner2: innerFunction2,
        inner3: innerFunction3
    };
}

const innerFunctions = outerFunction();
innerFunctions.inner1(); // Output: Outer variable - Inner function 1
innerFunctions.inner2(); // Output: Outer variable - Inner function 2
innerFunctions.inner3(); // Output: Outer variable - Inner function 3


// Level 3: personAccount function with income, expense tracking
function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function totalIncome() {
        let total = 0;
        incomes.forEach(income => total += income.amount);
        return total;
    }

    function totalExpense() {
        let total = 0;
        expenses.forEach(expense => total += expense.amount);
        return total;
    }

    function accountInfo() {
        return `${firstName} ${lastName}:\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}`;
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        addIncome,
        addExpense,
        accountInfo,
        accountBalance
    };
}

// Usage example:
const person1 = personAccount('John', 'Doe');
person1.addIncome('Salary', 3000);
person1.addIncome('Freelance', 1500);
person1.addExpense('Rent', 1000);
person1.addExpense('Food', 500);

console.log(person1.accountInfo());
console.log('Account Balance:', person1.accountBalance());
