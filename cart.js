
document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const products = [
      { id: 1, name: 'Product 1', price: 20.00 },
      { id: 2, name: 'Product 2', price: 90.00 },
  ];

  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          const productId = event.target.parentElement.id;
          const product = products.find(p => p.id == productId);
          cart.push(product);
          updateCart();
      });
  });

  const updateCart = () => {
      cartItems.innerHTML = '';
      let total = 0;

      cart.forEach(product => {
          const cartItem = document.createElement('li');
          cartItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
          cartItems.appendChild(cartItem);
          total += product.price;
      });

      totalPrice.textContent = total.toFixed(2);
  };
});
