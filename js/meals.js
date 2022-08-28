// ** load meals data from api

const dataLoad = async (search)=>{
    try {
        if (search) {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            response.ok ? "Successful" : "Unsuccessfull"
            const data = await response.json()
            displayMeals(data)
        } else {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=t`)
            response.ok ? "Successful" : "Unsuccessfull"
            const data = await response.json()
            displayMeals(data)
        }
        
    } catch (error) {
        console.log(error);
    }
};


// ** Display the meals
// create card using the meals data and display

const displayMeals = data=>{

    console.log(data)
    // ** Place where we add data

    const container = document.getElementById('card-section');

    container.textContent = ``;

    const {meals} = data;
    
    meals.forEach(meal => {
        
        const {strMeal,strArea,strCategory,strInstructions,strMealThumb,idMeal} = meal;

        const contentDiv = document.createElement('div');

        contentDiv.classList.add("col");

        contentDiv.innerHTML = `
        <div onclick="loadMealData(${idMeal})" class="card shadow-lg rounded-xl">
        <img src="${strMealThumb}" class="card-img-top rounded-xl p-1 img-fluid" alt="..." />
            <div class="card-body bg-dark ">
            <h5 class="card-title text-info">Name: ${strMeal}</h5>
            <h5 class="card-title text-success">Origin: ${strArea}</h5>
            <h5 class="card-title text-primary">Catagory: ${strCategory}</h5>
            <p class="card-text text-muted">
                ${strInstructions.slice(0,100)}
            </p>
            </div>
        </div>
        
        `;


        container.appendChild(contentDiv)


    })
}

// ** Search functionality

const searchFeature = ()=>{

    const searchInputField = document.getElementById('search-input');
    const searchValue = searchInputField.value;

    dataLoad(searchValue);


}

document.getElementById('button-addon2').addEventListener('click',()=>{
    searchFeature();
});

dataLoad(false);


// ** data loading for single meal 

const loadMealData = async (id)=>{
    try {
        const response =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        displayDetail(data)
    } catch (error) {
        console.log(error)
    }
};


// ** Display single meals detail

const displayDetail = (data)=>{
    // ** Where to display
    console.log(data)
    const displayContainer = document.getElementById('detail-card');

}