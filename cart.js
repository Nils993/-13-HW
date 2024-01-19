///////////////////////////////////////////////////////////////////
const cartWrapper = document.querySelector(".cart-wrapper");
window.addEventListener("click", function (event) {
  // Проверяем что клик был совершен по кнопке "Добавить в корзину"
  if (event.target.hasAttribute("data-cart")) {
    // Находим карточку с товаром, внутри котрой был совершен клик
    const card = event.target.closest(".product_item");

    const productInfo = {
      id: card.dataset.id,
      img: card.querySelector(".product__img").getAttribute("src"),
      title: card.querySelector(".product_item_title").innerText,
      price: card.querySelector(".product_price").innerText,
      color: card.querySelector(".color").innerText,
      size: card.querySelector(".size_value").innerText,
      quantity: card.querySelector("#quantity_num").defaultValue,
    };

    const createCartEl = `<div  class="card  id="${productInfo.id}">
    <button class="btn"></button>
    <div class="image">
      <img class="img_el" src="${productInfo.img}" alt="picture" />
    </div>
    <div class="text">
      <p class="title">${productInfo.title}</p>
      <p class="price">Price:<span class="priceProduct">${productInfo.price}</span></p>
      <p class="color">Color:<span class="color_name">${productInfo.color}</span></p>
      <p class="size">Size:<span class="size_value">${productInfo.size}</span></p>
      <div class="quantity">
        <label for="quantity_num"> Quantity: </label
        ><input value="${productInfo.quantity}" type="text" id="quantity_num" />
      </div>
    </div>
    </div>
    `;

    cartWrapper.insertAdjacentHTML("beforeend", createCartEl);
  }

  const butt = document.querySelectorAll(".btn");
  butt.forEach((el) => {
    el.addEventListener("click", () => {
      const del = el.closest(".card");
      del.remove();
    });
  });
  const cartTitle = document.querySelector(".cart_title");
  if (cartWrapper.children.length >= 1) {
    cartTitle.classList.remove("hidden");
  } else {
    cartTitle.classList.add("hidden");
  }
  const count = cartWrapper.children.length;
  console.log(count);
  const cartValue = document.querySelector(".cart_val");
  cartValue.textContent = count;
});
