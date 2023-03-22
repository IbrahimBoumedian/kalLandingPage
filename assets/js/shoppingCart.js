const openShoppingIcons = document.querySelectorAll(".shopping-cart-icon");
let shoppingCart = document.querySelector(".shopping-cart-screen");
const closeShoppingIcons = document.querySelectorAll(".close-shopping-icon");

function openShoppingCart() {
  shoppingCart.classList.toggle("active");
}
function closeShoppingCart() {
  shoppingCart.classList.remove("active");
}

openShoppingIcons.forEach((item) => {
  item.addEventListener("click", openShoppingCart);
});

closeShoppingIcons.forEach((item) => {
  item.addEventListener("click", closeShoppingCart);
});
