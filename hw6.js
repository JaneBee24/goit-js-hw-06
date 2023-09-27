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




// <!--Завдання 3-->
const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  const galleryList = document.querySelector(".gallery");
  images.forEach((image) => {
    const listItem = document.createElement("li");
    const img = document.createElement("img");
    listItem.classList.add("gallery-item");
    img.src = image.url;
    img.alt = image.alt;
    listItem.appendChild(img);
    galleryList.appendChild(listItem);
  });
// <!--Завдання 3-->




// <!--Завдання 4-->
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

function updateCounterValue() {
  valueSpan.textContent = counterValue;
}

// <!--Завдання 4-->




// <!--Завдання 5-->
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim(); // Отримуємо введений текст, видаляючи зайві пробіли з початку і кінця

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});

// <!--Завдання 5-->



// <!--Завдання 6-->
const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));
  const inputValue = validationInput.value.trim().length;

  if (inputValue === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});

// <!--Завдання 6-->



// <!--Завдання 7-->
  const fontSizeControl = document.getElementById("font-size-control");
  const textElement = document.getElementById("text");
  fontSizeControl.addEventListener("input", function () {
    textElement.style.fontSize = fontSizeControl.value + "px";
  });
// <!--Завдання 7-->




// <!--Завдання 8-->
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const formData = new FormData(loginForm); 
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  if (!formObject.email || !formObject.password) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  console.log(formObject);
  loginForm.reset();
});
// <!--Завдання 8-->


// <!--Завдання 9-->
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }
  const widget = document.querySelector(".widget");
  const colorSpan = widget.querySelector(".color");
  const changeColorButton = widget.querySelector(".change-color");
  changeColorButton.addEventListener("click", function () {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  });
// <!--Завдання 9-->

