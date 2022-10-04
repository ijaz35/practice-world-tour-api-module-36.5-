function loadData() {
    const inputField = document.getElementById('search-field');
    toggleElementDisplay('spinner-container', 'block');
    toggleElementDisplay('single-drink-container', 'none');
    const inputValue = inputField.value;
    inputField.value = '';
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data.drinks))
}
const toggleElementDisplay = (id, display) => {
    const elementDiv = document.getElementById(id);
    elementDiv.style.display = display;
}
function displayData(drinks) {
    const drinksContainer = document.getElementById('cocktail-container');
    drinksContainer.textContent = '';
    const errorMsg = document.getElementById('error-msg');
    if (!drinks) {
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = `
        <h6>No Drink Found</h6>
        `;
        errorMsg.style.textAlign = 'center';
        errorMsg.style.color = 'red';
        errorMsg.style.fontWeight = 'bolder';
    } else {
        errorMsg.style.display = 'none';
        drinks?.forEach(drink => {
            // console.log(drink.idDrink);
            const drinkDiv = document.createElement('div');
            drinkDiv.classList.add('col');
            drinkDiv.innerHTML = `
            <div class="card" onclick="loadDrink(${drink.idDrink})">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="drink image">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink ? drink.strDrink : ''}</h5>
                    <p class="card-text">${drink.strInstructions.slice(0, 200) ? drink.strInstructions : ''}</p>
                </div>
            </div>
            `;
            drinksContainer.appendChild(drinkDiv);

        });
    }
    toggleElementDisplay('spinner-container', 'none');
}

const loadDrink = async (id) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    showDrink(data.drinks[0]);
}
const showDrink = (drink) => {
    // console.log(drink);
    const singleDrinkContainer = document.getElementById('single-drink-container');
    toggleElementDisplay('single-drink-container', 'block');
    singleDrinkContainer.textContent = '';
    const singleDrinkDiv = document.createElement('div');
    singleDrinkDiv.innerHTML = `
    <div class="card mx-auto" style="width: 50%;">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${drink.strDrink}</h5>
            <p class="card-text">${drink.strInstructions
            .slice(0, 200)}</p>
        </div>
    </div>
    `;
    singleDrinkContainer.appendChild(singleDrinkDiv);


}