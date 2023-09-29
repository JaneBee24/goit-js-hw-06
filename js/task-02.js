const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  const lastChild = ingredientsList.lastElementChild;
  if (lastChild) {
    lastChild.after(listItem);
  } else {
    ingredientsList.appendChild(listItem);
  }
});