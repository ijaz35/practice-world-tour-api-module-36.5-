//৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const numbers = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
const newArray = numbers.map(number => number / 7);
// console.log(newArray);

//৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
//forEach
// numbers.forEach(number => console.log(number));

//filter
const numberLessThen20 = numbers.filter(number => number < 20);
// console.log(numberLessThen20);

//find
const numberLessThen30 = numbers.find(number => number === 42);
// console.log(numberLessThen30);


//describe map,foreach,find,filter by an array of objects.
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'bag', price: 500, color: 'white' },
    { name: 'watch', price: 150, color: 'black' },
    { name: 'watch', price: 1050, color: 'red' }
];
const productNameArray = products.map(product => product.name);
// console.log(productNameArray);
// products.forEach(product => console.log(product));
const findWatch = products.find(product => product.name == 'watch');

console.log(findWatch);
const findWatch1 = products.filter(product => product.name == 'watch');
// console.log(findWatch1);
