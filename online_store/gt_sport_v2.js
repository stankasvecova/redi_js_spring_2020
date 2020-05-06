const sportProducts = [
  {
    imgSrc: "skateboard.jpg",
    name: "Skateboard",
    brand: "Hudora",
    level: "beginner",
    price: 50,
    seller: "Hudora",
    other: {
      helmetNeeded: true,
      longevity: "mid-term",
      teamSpirit: false,
    }
  },
  {
    imgSrc: "standuppaddle.jpg",
    name: "Stand-up paddle",
    brand: "Oceana",
    level: "advanced",
    price: 300,
    seller: "Oceana",
    other: {
      helmetNeeded: false,
      longevity: "long-term",
      teamSpirit: true,
    }
  },
  {
    imgSrc: "volleyball.jpg",
    name: "Volleyball ball",
    brand: "Mikasa",
    level: "beginner",
    price: 26,
    seller: "Mikasa",
    other: {
      helmetNeeded: false,
      longevity: "short-term",
      teamSpirit: true,
    }
  },
  {
    imgSrc: "xbadmintonset.jpg",
    name: "Badminton set",
    brand: "Talbot Torro",
    level: "intermediate",
    price: 28,
    seller: "Talbot Torro",
    other: {
      helmetNeeded: false,
      longevity: "mid-term",
      teamSpirit: true,
    }
  },
  {
    imgSrc: "skigoggles.jpg",
    name: "Ski Goggles",
    brand: "Lemego",
    level: "intermediate",
    price: 28,
    seller: "Lemego",
    other: {
      helmetNeeded: true,
      longevity: "mid-term",
      teamSpirit: true,
    }
  },
];
const productDescription = document.getElementById("productDescription");
let shoppingCart = [];
let productEl = [];
const sportProductsEl = document.getElementById("sportProducts");
const addToShoppingCartEl = document.getElementById("addToShoppingCart");
let totalPriceEl = document.getElementById("totalPrice").value;
let shoppingCartEl = document.getElementById("shoppingCart");
let calTPbtn = document.getElementById("calTP");
let addToShoppingCartBtn = document.getElementById("addToShoppingCartBtn");
let descriptions = [];
let intoSCbtn = document.getElementById("intoSC");

function productDescriptionDisplay() {
  for (let i = 0; i < sportProducts.length; i++) {
    descriptions = document.createElement("div");
    const btnEl = document.createElement("button");
    const product = sportProducts[i];
    descriptions.innerHTML = `
  <p> <b>${sportProducts[i].name}</b></p>
  <p> <img src='${sportProducts[i].imgSrc}' style="width:50px"><p>
  <p> <b>Brand:</b> ${sportProducts[i].brand}</p>
  <p> <b>Price:</b> ${sportProducts[i].price} Eur</p>
  <p> Sold by a <b>gT partner</b> called ${sportProducts[i].seller}.</p>
  <p> This ${sportProducts[i].name} is suitable for teenagers on ${sportProducts[i].level} level.</p>
  `;
    const addToShoppingCartBtn = document.createElement('button');
    addToShoppingCartBtn.textContent = 'Add to shopping cart';
    addToShoppingCartBtn.addEventListener('click', function () {
      const shoppingCartProduct = document.createElement("product");
      document.getElementById("shoppingCart").appendChild(shoppingCartProduct);
      alert ("Your selected product was added");
    });
    descriptions.appendChild(addToShoppingCartBtn);
    productDescription.appendChild(descriptions);
  }
};

productDescriptionDisplay();

function addProductsToCart(product) {
  shoppingCart.push(product);
};

function displayContentInCart() {
  for (let i = 0; i < shoppingCart.length; i++) {
    let shoppingCartEl = document.createElement("div");
    intoSCbtn.addEventListener("click", function () {
      shoppingCartEl.innerHTML = `
      ${sportProducts[i].name}:
      ${sportProducts[i].price} Eur
      `; 
      shoppingCart.appendChild(shoppingCartEl);
    });


    /* descriptions = document.createElement("div")
    const btnEl = document.createElement("button");
    productEl.innerHTML = `
    ${sportProducts[i].name}:
    ${sportProducts[i].price} Eur
    `;
    contentEl.appendChild(productEl);*/

  }
}

function calculateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price;
    totalPriceEl.innerHTML = `
    Total price to pay is ${totalPrice}`;
  }
}

intoSCbtn.addEventListener("click", displayContentInCart);
calTPbtn.addEventListener("click", calculateTotalPrice);

