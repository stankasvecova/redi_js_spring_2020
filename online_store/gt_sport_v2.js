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

function productDescriptionDisplay() {
  for (let i = 0; i < sportProducts.length; i++) {
    descriptions = document.createElement("div");
    descriptions.innerHTML = `
      <p> <b>${sportProducts[i].name}</b></p>
      <p> <img src='${sportProducts[i].imgSrc}' style="width:50px"><p>
      <p> <b>Brand:</b> ${sportProducts[i].brand}</p>
      <p> <b>Price:</b> ${sportProducts[i].price} Eur</p>
      <p> Sold by a <b>gT partner</b> called ${sportProducts[i].seller}.</p>
      <p> This ${sportProducts[i].name} is suitable for teenagers on ${sportProducts[i].level} level.
      <p> <button type="button" id="addToShoppingCart">Add to Shopping Cart</button>
      `;
    productDescription.appendChild(descriptions);
  };
};
productDescriptionDisplay();

const product = sportProducts[i];
let shoppingCart = [];
const sportProductsEl = document.getElementById("sportProducts");
const addToShoppingCartEl = document.getElementById("addToShoppingCart");

function addProductsToCart() {
  for (let i = 0; i < sportProducts.length; i++) {
    shoppingCart.push(sportProducts[i]);
  };
  console.log(shoppingCart);
};

const productEl = document.createElement('div');
productEl.innerHTML = `
    <p>Price: ${product.price}</p>
    <p>Brand: ${product.brand}</p>
    <button>Add to cart</button>
`;
const btnEl = productEl.querySelector('button');
btnEl.addEventListener('click', addToCartFn);
productListEl.appendChild(productEl);


function displayContentInCart() {
  for (let i = 0; i < shoppingCart.length; i++) {
    const contentEl = document.getElementById("shoppingCart")
    const productEl = document.createElement("div")
    productEl.innerHTML = `
    ${sportProducts[i].name}
    ${sportProducts[i].price}
    `
  }
}
addToShoppingCartEl.addEventListener("click", addProductsToCart);
