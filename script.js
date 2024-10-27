// Function to add items to cart
function addToCart(productName, price, imageUrl) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let itemIndex = cart.findIndex(item => item.name === productName);
  
  if (itemIndex !== -1) {
    cart[itemIndex].quantity++;
  } else {
    cart.push({ name: productName, price: price, quantity: 1, imageUrl: imageUrl });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));

  // Show alert before redirecting
  alert(`Item ${itemIndex !== -1 ? 'updated' : 'added'} to cart`);

  // Redirect to cart page after adding item
  window.location.href = "cart.html";
}


// Function to calculate subtotal of an item
function calculateSubtotal(item) {
  return item.price * item.quantity;
}

// Function to calculate total of all items in cart
function calculateTotal(cart) {
  return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
}

// Function to remove items from cart
function removeFromCart(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let itemIndex = cart.findIndex(item => item.name === productName);
  if (itemIndex !== -1) {
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity--;
    } else {
      cart.splice(itemIndex, 1); // Remove item from cart if quantity is 1
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Update cart display after removal
  }
}

function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartList = document.getElementById('cart-list');
  let totalElement = document.getElementById('total');
  let total = 0;

  cartList.innerHTML = '';
  cart.forEach(item => {
    let subtotal = calculateSubtotal(item);
    total += subtotal;

    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="border-left-style: none;"><img src="${item.imageUrl}" alt="${item.name}" style="width: 50px;"></td>
      <td>${item.name}</td>
      <td>Rs ${item.price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>Rs ${subtotal.toFixed(2)}</td>
      <td style="border-right-style: none;"><button onclick="removeFromCart('${item.name}')">Remove</button></td>
    `;
    cartList.appendChild(tr);
  });

  totalElement.textContent = `Rs ${total.toFixed(2)}`;
}

// Call displayCartItems on page load
displayCartItems();