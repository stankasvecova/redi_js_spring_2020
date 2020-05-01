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
function productDescriptionDisplay() {
  for (let i = 0; i < sportProducts.length; i++) {
    descriptions = document.createElement("ul");
    const productDescription = document.getElementById("productDescription")
    descriptions.innerHTML = `
      <p> <b>${sportProducts[i].name}</b></p>
      <p> <img src='${sportProducts[i].imgSrc}' style="width:50px"><p>
      <p> <b>Brand:</b> ${sportProducts[i].brand}</p>
      <p> <b>Price:</b> ${sportProducts[i].price} Eur</p>
      <p> Sold by a <b>gT partner</b> called ${sportProducts[i].seller}.</p>
      <p> This ${sportProducts[i].name} is suitable for teenagers on ${sportProducts[i].level} level.
 `;
    productDescription.appendChild(descriptions);
    descriptions.innerHTML = productDescriptionDisplay();
  }
};

productDescriptionDisplay();

const shoppingCart = [];

function addProductsToCart () {
  for (let i = 0; i < sportProducts.length; i++)
  shoppingCart.push(sportProducts[i])
}
