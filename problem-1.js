//১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 
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
student.getDetails();