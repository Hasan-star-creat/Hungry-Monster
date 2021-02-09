 const searcFood= () => {
 const textFood =  document.getElementById('search-field').value;
  const url =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${textFood}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
 }

 const displayFood = foods => {
      const foodContainer = document.getElementById('food-name');
      // foodContainer.innerText = ''; // previw data don't store
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
   }
    
   const displayDetails = (food) => {
    const detaisfood = [food[0].strIngredient1, food[0].strIngredient3, food[0].strIngredient4, food[0].strIngredient5, food[0].strIngredient6, food[0].strIngredient7];
     const divFoodDetails = document.getElementById('food-details');
     detaisfood.forEach(details => {
        const li = document.createElement('li');     
        li.innerText = details;
        divFoodDetails.appendChild(li)
      });
   

            
            console.log('Ingredients', food);
            console.log('area', food[0].strIngredient1);
            console.log('area', food[0].strIngredient1);

   }