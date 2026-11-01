
"use strict";

// WHATSAPP NUMBER
const WHATSAPP_NUMBER = "918369405815";

// MENU PRODUCTS
const MENU = [
  {
    name: "Tropical Mix",
    price: 250,
    category: "coconut",
    image: "item-01.jpg"
  },
  {
    name: "Citrus Zest",
    price: 260,
    category: "coconut",
    image: "item-02.jpg"
  },
  {
    name: "Berry Mix",
    price: 300,
    category: "coconut",
    image: "item-03.jpg"
  },
  {
    name: "Desi Mix",
    price: 310,
    category: "coconut",
    image: "item-04.jpg"
  },
  {
    name: "Morning Glow",
    price: 320,
    category: "coconut",
    image: "item-05.jpg"
  },
  {
    name: "Exotic Island",
    price: 260,
    category: "coconut",
    image: "item-06.jpg"
  },
  {
    name: "Clear Coconut Matcha",
    price: 350,
    category: "coconut",
    image: "item-07.jpg"
  },
  {
    name: "Clear Ube Matcha",
    price: 350,
    category: "coconut",
    image: "item-08.jpg"
  },
  {
    name: "Lemon Ice Tea",
    price: 260,
    category: "iced",
    image: "item-09.jpg"
  },
  {
    name: "Peach Ice Tea",
    price: 280,
    category: "iced",
    image: "item-10.jpg"
  },
  {
    name: "Strawberry Ice Tea",
    price: 300,
    category: "iced",
    image: "item-11.jpg"
  },
  {
    name: "Passion Fruit Ice Tea",
    price: 300,
    category: "iced",
    image: "item-12.jpg"
  },
  {
    name: "Tropical Real",
    price: 270,
    category: "tea",
    image: "item-13.jpg"
  },
  {
    name: "Berry Real",
    price: 280,
    category: "tea",
    image: "item-14.jpg"
  },
  {
    name: "Kiwi Splash Real",
    price: 290,
    category: "tea",
    image: "item-15.jpg"
  },
  {
    name: "Pink Dragon Real",
    price: 290,
    category: "tea",
    image: "item-16.jpg"
  },
  {
    name: "Chatpata Guava Real",
    price: 290,
    category: "tea",
    image: "item-17.jpg"
  }
];

// ADD-ONS
const ADDONS = [
  {
    name: "Fresh Coconut Chunks",
    price: 50,
    category: "addons"
  },
  {
    name: "Fresh Fruits (100 gms)",
    price: 80,
    category: "addons"
  }
];

const ALL_ITEMS = [...MENU, ...ADDONS];

const menuGrid = document.getElementById("menuGrid");
const filterButtons = document.querySelectorAll(".filter");

// CREATE PRODUCT CARD
function createProductCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";

  if (item.image) {
    const imageBox = document.createElement("div");
    imageBox.className = "product-image";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.loading = "lazy";

    img.onerror = function () {
      imageBox.innerHTML = "";
      const placeholder = document.createElement("div");
      placeholder.className = "image-placeholder";
      placeholder.textContent = item.name;
      imageBox.appendChild(placeholder);
    };

    imageBox.appendChild(img);
    card.appendChild(imageBox);
  }

  const info = document.createElement("div");
  info.className = "product-info";

  const category = document.createElement("p");
  category.className = "product-category";

  const categoryNames = {
    coconut: "Coconut Infusion",
    iced: "Ice Tea Infusion",
    tea: "Farm to Cup Tea",
    addons: "Add-on"
  };

  category.textContent = categoryNames[item.category];

  const name = document.createElement("h3");
  name.textContent = item.name;

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = "₹" + item.price;

  const orderButton = document.createElement("button");
  orderButton.className = "order-button";
  orderButton.textContent = "Order on WhatsApp";

  orderButton.addEventListener("click", function () {
    orderOnWhatsApp(item);
  });

  info.appendChild(category);
  info.appendChild(name);
  info.appendChild(price);
  info.appendChild(orderButton);

  card.appendChild(info);

  return card;
}

// DISPLAY MENU
function renderMenu(category = "all") {
  if (!menuGrid) return;

  menuGrid.innerHTML = "";

  const filteredItems = ALL_ITEMS.filter(function (item) {
    return category === "all" || item.category === category;
  });

  filteredItems.forEach(function (item) {
    menuGrid.appendChild(createProductCard(item));
  });
}

// FILTER BUTTONS
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    renderMenu(button.dataset.category);
  });
});

// WHATSAPP ORDER
function orderOnWhatsApp(item) {
  const message =
    "Hello Tea A More! I would like to order:\n\n" +
    item.name +
    "\nPrice: ₹" +
    item.price +
    "\n\nPlease share the details.";

  const whatsappURL =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank", "noopener");
}

// MOBILE NAVIGATION
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });
}

// FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// INITIALIZE WEBSITE
renderMenu();
                   
