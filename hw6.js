// <!--Завдання 1-->
const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach((item) => {
    const categoryTitle = item.querySelector("h2").textContent;
    const categoryElements = item.querySelectorAll("ul > li");
    console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
// <!--Завдання 1-->


// <!--Завдання 2-->
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  const ingredientsList = document.querySelector("#ingredients");
  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient; 
    listItem.classList.add("item"); 
    ingredientsList.appendChild(listItem); 
  });
// <!--Завдання 2-->