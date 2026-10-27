    let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById("cartItems");
  const totalDiv = document.getElementById("total");

  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const row = document.createElement("div");
    const label = document.createElement("span");
    const remove = document.createElement("button");

    label.textContent = item.name + " - ₹" + item.price + " ";

    remove.textContent = "Remove";
    remove.onclick = function() {
      cart.splice(index, 1);
      updateCart();
    };

    row.append(label, remove);
    cartDiv.appendChild(row);
  });

  totalDiv.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Please add something to your order!");
    return;
  }

  let message = "Hello BLACK BREW!\n\n";
  message += "I would like to order:\n";

  let total = 0;

  cart.forEach(item => {
    message += item.name + " - ₹" + item.price + "\n";
    total += item.price;
  });

  message += "\nTotal: ₹" + total;

  // Replace with the real cafe WhatsApp number
  const phone = "917861903751";

  const url =
    "https://wa.me/" + phone +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}