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
