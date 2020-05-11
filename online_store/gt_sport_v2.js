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
    },
    availability: 1,
    rating: 3,
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
    },
    availability: 10,
    rating: 5,
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
    },
    availability: 3,
    rating: 4,
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
    },
    availability: 5,
    rating: 3,
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
    },
    availability: 7,
    rating: 4,
  },
];
const productDescription = document.getElementById("productDescription");
const intoSCbtn = document.getElementById("intoSC");
const sportProductsEl = document.getElementById("sportProducts");
const addToShoppingCartEl = document.getElementById("addToShoppingCart");
const totalPriceEl = document.getElementById("totalPrice");
const shoppingCartEl = document.getElementById("shoppingCart");
const calTPbtn = document.getElementById("calTP");
const addToShoppingCartBtn = document.getElementById("addToShoppingCartBtn");
// const descriptions = [];
const shoppingCart = [];
const productEl = [];


function productDescriptionDisplay() {
  for (let i = 0; i < sportProducts.length; i++) {
    const descriptions = document.createElement("div");
    const btnEl = document.createElement("button");
    const product = sportProducts[i];

    descriptions.innerHTML = `
      <p> <b>${product.name}</b></p>
      <p> <img src='${product.imgSrc}' style="width:50px"><p>
      <p> <b>Brand:</b> ${product.brand}</p>
      <p> <b>Price:</b> ${product.price} Eur</p>
      <p> Sold by a <b>gT partner</b> called ${product.seller}.</p>
      <p> This ${product.name} is suitable for teenagers on ${product.level} level.</p>
      <p> ${getRatings(product.rating)} </p>
      `

    if (product.availability < 1) {
      descriptions.innerHTML += "<p>This product is currently out of stock / not available.</p>";
    } else if (product.availability === 1) {
      descriptions.innerHTML += "<p> Last chance! Only 1 more left in stock! </p>";
    } else if (product.availability > 1 && product.availability <= 3) {
      descriptions.innerHTML += `<p> We have only ${product.availability} pieces left. Hurry! </p>`;
    } else {
      descriptions.innerHTML += `<p> This product is currently available, ${product.availability} pieces in stock. </p>`;
    }

    const addToShoppingCartBtn = document.createElement('button');
    addToShoppingCartBtn.textContent = 'Add to shopping cart';
    addToShoppingCartBtn.addEventListener('click', function () {
      shoppingCart.push(product);
      console.log(shoppingCart);
      addToShoppingCartBtn.setAttribute("disabled", "true");
    });
    descriptions.appendChild(addToShoppingCartBtn);
    productDescription.appendChild(descriptions);

    if (sportProducts[i].availability === 0) {
      addToShoppingCartBtn.setAttribute("disabled", "true")
    }
  }
};

productDescriptionDisplay();

function addProductsToCart(product) {
  shoppingCart.push(product);
};

function displayContentInCart() {
  shoppingCartEl.innerHTML = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    let cartItemEl = document.createElement("div");
    const product = shoppingCart[i];
    cartItemEl.innerHTML = `
    ${product.name}: ${product.price} Eur
    `;
    shoppingCartEl.appendChild(cartItemEl);
  }
}

function calculateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price;
    totalPriceEl.innerHTML = `
    Total price to pay is ${totalPrice} Eur`;
  }
}

intoSCbtn.addEventListener("click", displayContentInCart);
calTPbtn.addEventListener("click", calculateTotalPrice);

function getRatings (rating) {
  const maxStars = 5;
  const emptyStars = maxStars - rating;
  //return "Rating:  ★ ☆ ☆ ☆ ☆";
  let starText = "";
  for (let i=0; i < rating; i++) {
    starText += "★";
  };
  for (let i=0; i < emptyStars; i++){
    starText += "☆"; 
  }
  return `Rating: ${starText}`;
}