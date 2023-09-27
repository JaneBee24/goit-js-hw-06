const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

for (const item of categoryItems) {
    const categoryTitle = item.querySelector("h2").textContent;
    const categoryElements = item.querySelectorAll("ul > li").length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements}`);
}


