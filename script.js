console.log("Alif Cotton House Website Loaded 🚀");
let cart = [];

function addToCart(item) {
  cart.push(item);
  alert(item + " added to cart 🛒");
}

function filter(category) {
  let items = document.querySelectorAll(".card");

  items.forEach(card => {
    if (category === "all") {
      card.style.display = "inline-block";
    } else {
      card.style.display = card.classList.contains(category)
        ? "inline-block"
        : "none";
    }
  });
}

function orderNow() {
  alert("Order placed! We will contact you 📞");
}
function sendOrder() {
  let name = document.querySelector("input").value;
  let phone = document.querySelectorAll("input")[1].value;
  let address = document.querySelector("textarea").value;

  let message = `Order Details:
Name: ${name}
Phone: ${phone}
Address: ${address}`;

  let url = "https://wa.me/9941339639?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart 🛒");
}
function filter(category) {
  let items = document.querySelectorAll(".card");

  items.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(category)
        ? "block"
        : "none";
    }
  });
}
