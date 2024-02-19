var btn_plus = document.querySelectorAll(".plus");
var btn_min = document.querySelectorAll(".min");
var price = document.querySelectorAll(".price");
var totalPrice = document.getElementById("totalPrice");
var quantity = document.querySelectorAll(".quantity");
var btn_Delete = document.querySelectorAll(".delete");
for (let btn of btn_plus) {
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    console.log(parent);
    let quantity = parent.querySelector(".quantity");
    quantity.innerHTML++;
    totalPrice.innerHTML =
      +totalPrice.innerHTML + +parent.querySelector(".price").innerHTML;
  });
}
for (let btn of btn_min) {
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    let quantity = parent.querySelector(".quantity");
    console.log(price);
    if (parseInt(quantity.innerHTML) > 0) {
      quantity.innerHTML--;
      totalPrice.innerHTML =
        +totalPrice.innerHTML - +parent.querySelector(".price").innerHTML;
    }
  });
}
for (let btn of btn_Delete) {
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    console.log(parent);
    let quantity = parent.querySelector(".quantity");
    let price = parent.querySelector(".price");
    totalPrice.innerHTML =
      +totalPrice.innerHTML - +quantity.innerHTML * +price.innerHTML;
    parent.remove();
  });
}
