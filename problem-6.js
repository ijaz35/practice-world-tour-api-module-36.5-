//৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
const student = {
    name: 'Sheikh Abu Talha',
    id: 110106045,
    department: 'Civil Engineering',
    cGpa: 3.30,
    job: 'Professor'
};
const { name, id, department, cGpa, job } = student;
// console.log(id, job);

const [first, balance, third] = [2008, 2010, 2016, 2018];
console.log(balance);