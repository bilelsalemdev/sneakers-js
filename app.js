// modify images when click
const childrenImgs = document.querySelectorAll(".children-img img");
const mainImg = document.querySelector(".main-img img");

for (let i = 0; i < childrenImgs.length; i++) {
  childrenImgs[i].addEventListener("click", function (event) {
    // this is to remove the -thumbnail from the src to get the main image
    let newSrc = event.target.getAttribute("src").split("-thumbnail").join("");
    mainImg.setAttribute("src", newSrc);
  });
}
//////////////////////////////////////
// increment and decrement the counter
const minusBtn = document.querySelector(".minus");

const plusBtn = document.querySelector(".plus");

const counter = document.querySelector(".counter");

let count = 0;

minusBtn.addEventListener("click", function () {
  if (counter.textContent > 0) {
    count--;
  }

  counter.textContent = count;
});

plusBtn.addEventListener("click", function () {
  count++;
  counter.textContent = count;
});

//////////////////////////////////////
// add elements to the cart

const addToCartBtn = document.querySelector(".add-to-cart");
const addedToCart = document.querySelector(".added-to-cart");
const popup = document.querySelector(".popup");
const cartIcon = document.querySelector(".cart");

if (count === 0) {
  addedToCart.classList.add("hide");
}
addToCartBtn.addEventListener("click", function (event) {
  if (count > 0) {
    addedToCart.classList.remove("hide");
    addedToCart.textContent = count;
  } else {
    addedToCart.classList.add("hide");
  }
});

cartIcon.addEventListener("click", function () {
  popup.classList.toggle("hide");
  if (count === 0) {
    popup.innerHTML = "Cart is empty";
    popup.classList.add("empty-card");
  } else {
    popup.classList.remove("empty-card");
    popup.innerHTML = `<h3 class="header">cart</h3>
    <div class="line"></div>
    <div class="content">
      <div class="info">
        <img
          src="${mainImg.getAttribute("src")}"
          alt="image-product"
        />
        <div>
          <div class="promotion">Fall Limited Edition Sneakers</div>
          <p class="price">
            <span>$125.00&nbsp;&times;</span>
            <span class="counter">${count}</span>
            <span class="total-price">$${(125.0 * count).toFixed(2)}</span>
          </p>
        </div>
        <img src="images/icon-delete.svg" alt="icon-delete" class='delete'/>
      </div>
      <button class="checkout-btn">Checkout</button>
    </div>`;

    const iconDelete = document.querySelector(".delete");
    iconDelete.addEventListener("click", function () {
      count = 0;
      counter.textContent = count;
      addedToCart.classList.add("hide");
      popup.innerHTML = "Cart is empty";
      popup.classList.add("empty-card");
    });
  }
});
