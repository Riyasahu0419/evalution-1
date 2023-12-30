// The items should be stored in local storage with key :- “items”
document.addEventListener("DOMContentLoaded", function () {
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries")
      .then((response) => response.json())
      .then((data) => {
        const itemsContainer = document.getElementById("items");
        data.forEach((item) => {
          const itemCard = document.createElement("div");
          itemCard.className = "item";
          itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button class="add_to_cart" onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
          `;
          itemsContainer.appendChild(itemCard);
        });
      });
  
    window.addToCart = function (itemName, itemPrice) {
      const existingItems = JSON.parse(localStorage.getItem("items")) || [];
  
      existingItems.push({ name: itemName, price: itemPrice });
  
      localStorage.setItem("items", JSON.stringify(existingItems));
  
      updateCartCount();
    };
  
    function updateCartCount() {
      const cartCount = document.getElementById("item_count");
      const existingItems = JSON.parse(localStorage.getItem("items")) || [];
      cartCount.textContent = existingItems.length;
    }
    updateCartCount();
  });
  