//২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 
const student = {
    name: 'Sheikh Abu Talha',
    id: 110106045,
    department: 'Civil Engineering',
    cGpa: 3.30,
    job: 'Professor',
    passingYears: [2008, 2010, 2016, 2018],
    educationalIstitutions: {
        sscExam: 'Khulna Zilla School',
        hscExam: 'Govt. M.M City College, Khulna',
        gratuation: 'Bangladesh University OF Engineering & Technology ',
    },
    getDetails: function () {
        console.log(this.name + ' is a student of ' + this.educationalIstitutions.gratuation);
    }
};

const studentInformation = `${student.name} has completed his higher secondary school certificate exam from ${student.educationalIstitutions.hscExam} in ${student.passingYears[1]}.`;
console.log(studentInformation);