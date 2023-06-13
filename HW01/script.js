const priceHeadphone = 15.678;
const priceTablet = 123.965;
const priceLaptop = 90.2345;
const min = 3;
const max = 15;
let maxPrice = Math.max(priceHeadphone, priceTablet,priceLaptop);
let minPrice = Math.min(priceHeadphone, priceTablet,priceLaptop);
let sumPrice = Number(priceHeadphone+priceTablet+priceLaptop);
let truncSumPrice = Math.trunc(priceHeadphone) + Math.trunc(priceTablet) + Math.trunc(priceLaptop);
let ceilSumPrice = Math.ceil(sumPrice / 100) * 100;
let fSumPrice = Math.floor(sumPrice / 100) * 100;
let floorSumPrice = Math.floor(sumPrice)
let evenNumber ;
let restOfMoney = 500 - sumPrice;
let averageSum = Math.ceil((sumPrice / 3) * 100) / 100;
let discount = Math.ceil((max - min) * Math.random() + min);
let sumToPay = Math.ceil(((sumPrice * ((100 - discount) * 0.01)) * 100)) / 100;
let profit = Math.ceil((sumPrice / 2 - (discount * 0.01 * sumPrice)) * 100) / 100;

console.log('Ціна навушників: '+priceHeadphone);
console.log('Ціна планшета: '+ priceTablet);
console.log('Ціна ноутбука: '+ priceLaptop);
console.log('Найбільша ціна з цих товарів: '+ maxPrice);
console.log('Найменша ціна з цих товарів: '+ minPrice);
console.log('Загальна ціна товарів: '+ sumPrice);
console.log('Загальна ціна товарів без копійок: '+ truncSumPrice);
console.log('Сума товарів з округленням до сотень (в більшу сторону): '+ ceilSumPrice);
console.log('Сума товарів з округленням до сотень (в меншу сторону): '+ fSumPrice);

evenNumber = (floorSumPrice % 2 === 0 ? false :true);

console.log('сума всіх товарів,округлена в меншу сторону, є непарним числом? ' +evenNumber);
console.log('Решта після оплати купюрою 500 грн становитиме ' +restOfMoney);
console.log('Середня ціна становить  ' +averageSum);
console.log('Знижка становить  ' + discount + ' %');
console.log('Сума до оплати за всі товари з урахуванням знижки  ' +sumToPay);
console.log('Чистий прибуток:   ' +profit); 

var text = `Найбільша ціна з цих товарів: ${maxPrice} <br>
Найменша ціна з цих товарів: ${minPrice} <br>
Загальна ціна товарів: ${sumPrice} <br>
Загальна ціна товарів без копійок: ${truncSumPrice} <br>
Сума товарів з округленням до сотень(в більшу сторону): ${ceilSumPrice} <br>
Сума товарів з округленням до сотень (в меншу сторону): ${fSumPrice} <br>
Cума всіх товарів,округлена в меншу сторону, є непарним числом? ${evenNumber} <br>
Решта після оплати купюрою 500 грн становитиме ${restOfMoney}<br>
Середня ціна становить ${averageSum}<br>
Знижка становить ${discount} % <br>
Сума до оплати за всі товари з урахуванням знижки ${sumToPay} <br> 
Чистий прибуток: ${profit} <br>  `;

document.write(text)

