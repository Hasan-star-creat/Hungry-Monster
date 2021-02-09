 const searcFood= () => {
 const textFood =  document.getElementById('search-field').value;
  const url =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${textFood}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
    .catch(error => displyerror('went to wrong! please try again later!1'))
 }
 const displyerror = error => {
  const Error =  document.getElementById('disply-error');
   Error.innerText = error; 
     console.log(error)
  }

 const displayFood = foods => {
      const foodContainer = document.getElementById('food-name');
       foodContainer.innerText =''; // previw data don't store
      foods.forEach(food => {
          const divFood = document.createElement('div');
           
           divFood.className = 'my-3 p-3 d-flex';
          divFood.innerText = food.strMeal;
          divFood.innerHTML = `
   <div onclick = "foodDisplyDetails('${food.idMeal}')" class="foodStyle">
       <img src="${food.strMealThumb}"> 
       <h5>${food.strMeal}</h5> 
   </div> `
         foodContainer.appendChild(divFood);
      });
 }

  // food display details 
   const foodDisplyDetails = (idmeal) => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals))
        .catch(error => displyError('Sorry! i failed to food detaisl, plese try again later!!'))
   }
     const displyError = error => {
     const Error =  document.getElementById('disply-error');
      Error.innerText = error; 
        console.log(error)
     }
    
   const displayDetails = (food) => { 
     //load  detail value
    
     console.log(food[0].strMealThumb)
    const detaisfood = [food[0].strIngredient1, food[0].strIngredient3, food[0].strIngredient4, food[0].strIngredient5, food[0].strIngredient6, food[0].strIngredient2];
  
     const detislsHeader = document.getElementById('detisls-header');
     detislsHeader.innerText = '';
     const divDetails= document.createElement('div');
     divDetails.className = 'my-3 p-3 d-flex';
     divDetails.innerText = food.strMeal;
     divDetails.innerHTML = `
           <div>
           <img class ="image" src="${food[0].strMealThumb}"> 
           <h5 class = "food-title">${food[0].strMeal}</h5> 
           
 </div> `
    // food details style 
    detislsHeader.appendChild(divDetails);
    const Details = document.getElementById('details');
     Details.style.width = "740px";
     Details.style.backgroundColor = "white";
     Details.style.borderRadius = " 20px"
     Details.style.boxShadow = " box-shadow: 5px 5px 10px #8f7f3f";
     Details.style.padding = " 10px"
    
      //get food details ul id
     const divFoodDetails = document.getElementById('food-details');
     divFoodDetails.innerText = '';
     divFoodDetails.innerHTML = `
     <p>Ingredients</p>
     `;
      //  forEach loop
     detaisfood.forEach(details => {
      const li = document.createElement('li');   
        li.innerText = details;
        divFoodDetails.appendChild(li)
      });

   }
