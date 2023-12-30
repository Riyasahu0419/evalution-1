document.addEventListener("DOMContentLoaded", function () {
    const placeOrderButton = document.getElementById("place-order");
    placeOrderButton.addEventListener("click", function () {
      const orderMessage = document.getElementById("order-message");
      orderMessage.textContent = "Your order is successfully placed";
  
      localStorage.removeItem("items");
      updateCartCount();
    });
  });
  