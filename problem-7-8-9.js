//৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 
const loadData = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
}
//৯. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 
const displayData = (users) => {
    const photoContainer = document.getElementById('photo-container');
    users.forEach(user => {
        const photodiv = document.createElement('div');
        photodiv.classList = "col";
        photodiv.innerHTML = `
        <div class="card" onclick="loadUser(${user.id})">
              <img src="${user.url}" class="card-img-top" alt="user image">
              <div class="card-body">
                <h5 class="card-title">${user.title}</h5>
              </div>
            </div>
        `;
        photoContainer.appendChild(photodiv);
    });
}

//৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 
const loadUser = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data);
}
function displayUser(user) {
    const singlePhotoContainer = document.getElementById('single-photo');
    const singleDiv = document.createElement('div');
    singlePhotoContainer.textContent = '';
    singleDiv.innerHTML = `
<div class="card mx-auto" style="width: 50%;">
  <img src="${user.thumbnailUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.title}</h5>
  </div>
</div>
`;
    singlePhotoContainer.appendChild(singleDiv);
}
loadData();