document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart");
    const cartTotal = document.getElementById("cart_total");
    const checkoutButton = document.getElementById("checkout");
  
    function updateCartDisplay() {
      const existingItems = JSON.parse(localStorage.getItem("items")) || [];
      cartContainer.innerHTML = "";
      let total = 0;
  
      existingItems.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
          <p>${item.name} - $${item.price}</p>
          <button class="remove" onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
  
        total += item.price;
      });
  
      cartTotal.textContent = `$${total.toFixed(2)}`;
    }
  
    window.removeFromCart = function (itemName) {
      const existingItems = JSON.parse(localStorage.getItem("items")) || [];
      const updatedItems = existingItems.filter((item) => item.name !== itemName);
      localStorage.setItem("items", JSON.stringify(updatedItems));
  
      updateCartDisplay();
      updateCartCount();
    };
  
    updateCartDisplay();
  
    checkoutButton.addEventListener("click", function () {
      window.location.href = "checkout.html";
    });
  });
  