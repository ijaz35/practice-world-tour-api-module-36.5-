function loadData() {
    const inputField = document.getElementById('search-field');
    const inputValue = inputField.value;
    inputField.value = '';
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data.drinks))
}

function displayData(drinks) {
    const drinksContainer = document.getElementById('cocktail-container');
    drinksContainer.textContent = '';
    drinks.forEach(drink => {
        // console.log(drink.idDrink);
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('col');
        drinkDiv.innerHTML = `
        <div class="card" onclick="loadDrink(${drink.idDrink})">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="drink image">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructions
                .slice(0, 200)}</p>
            </div>
        </div>
        `;
        drinksContainer.appendChild(drinkDiv);
    });
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