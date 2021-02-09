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
         console.log(food)
          const divFood = document.createElement('div');
           divFood.className = 'my-3 p-3 d-flex';
          divFood.innerText = food.strMeal;
          divFood.innerHTML = `
       <div class="foodStyle">
       <img src="${food.strMealThumb}"> 
       <h5>${food.strMeal}</h5> 
   </div> `
  //  <div class="col-md-3 text-md-right text-center">
  //      <button onclick = "getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
  //  </div> 
          foodContainer.appendChild(divFood);
      });
 }