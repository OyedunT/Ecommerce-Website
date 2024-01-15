let cartItems = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  totalPrice += itemPrice;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalSpan = document.getElementById('total-price');
  
  cartList.innerHTML = '';
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
  });

  totalSpan.textContent = totalPrice.toFixed(2);
}

function checkout() {
  alert(`Total Amount: $${totalPrice.toFixed(2)}\nThank you for your purchase!`);
  // You can add additional logic here, such as clearing the cart and redirecting to a thank you page.
  clearCart();
  updateCart();
}

function clearCart() {
  cartItems = [];
  totalPrice = 0;
}
