const Ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const Latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const Litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


/*1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this*/

let inputSalary = Number(prompt('Яка зарплата спеціаліста в Україні'));


function getMyTaxes ( salary){
    const calculatedTax = Math.round(Number(this.tax) * Number(salary) * 100)/100;
    return calculatedTax;
}
console.log(`1. IT-спеціаліст в Україні заплатить податків`,getMyTaxes.call(Ukraine, inputSalary));

/**
 * 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax *
middleSalary). Функція повинна викликатись через call та працювати з даними
через this
 */

function getMiddleTaxes (country){
    const calculatedAllTax = Math.round(Number(this.tax) * Number(this.middleSalary) * 100 ) / 100;
    return calculatedAllTax;
}
console.log(`2. Всередньому податків платять IT-спеціалісти в Україні`,getMiddleTaxes.call(Ukraine));
console.log(`2. Всередньому податків платять IT-спеціалісти в Латвії`,getMiddleTaxes.call(Latvia));
console.log(`2. Всередньому податків платять IT-спеціалісти в Литві.`,getMiddleTaxes.call(Litva));

/*3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки
всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary *
vacancies). Функція повинна викликатись через call та працювати з даними
через this
*/
function getTotalTaxes (country){
    const calculatedTotalTax = Math.round(Number(this.tax) * Number(this.middleSalary) * Number(this.vacancies) * 100) / 100;
    return calculatedTotalTax;
}

console.log(`3. Всього податків IT-спеціалісти платять в Україні `,getTotalTaxes.call(Ukraine));
console.log(`3. Всього податків IT-спеціалісти платять в Латвії`,getTotalTaxes.call(Latvia));
console.log(`3. Всього податків IT-спеціалісти платять в Литві`,getTotalTaxes.call(Litva));

/*4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт
виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;
для виводу в консоль кожні 10 секунд використайте setInterval*/

function getMySalary (country) {
    let min = 1500;
    let max = 2000;
    let randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
    const calculated = {
        salary: randomSalary, 
        taxes: Math.round((randomSalary * country.tax)* 100) / 100,
        profit: randomSalary - Math.round((randomSalary * country.tax)* 100) / 100 
    }
    


    return console.log(`4. В Україні `,calculated);
   

}

document.writeln(`Результати в консолі <br>`)
let timerShow = setInterval(() => getMySalary(Ukraine), 10000);
