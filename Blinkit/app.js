const data = [
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
    pname: "Amul Pure Milk Cheese Slices",
    weight: "350 g",
    price: 140,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7514beed-37f7-4c8c-b50a-4b39842009b8.jpg?ts=1707312315",
    pname: "Amul Salted Butter",
    weight: "500 g",
    price: 285,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913",
    pname: "Mother Dairy Classic Curd",
    weight: "400 g",
    price: 34,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7d48ff24-6659-4107-be92-6d05b7230504.jpg?ts=1716382216",
    pname: "Table White White Eggs (6 pieces)",
    weight: "6 pieces",
    price: 50,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
    pname: "Amul Gold Full Cream Fresh Milk",
    weight: "500 ml",
    price: 33,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6525a6e8-5d03-46db-b5e7-b5b4f778b693.jpg?ts=1708592369",
    pname: "Amul Masti Curd",
    weight: "400 g",
    price: 34,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c81190d2-0883-4f31-8e98-dd315b139d0f.jpg?ts=1712325589",
    pname: "Nestle a+ Nourish Toned Milk",
    weight: "1 L",
    price: 106,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ea41f5de-dd51-416b-b115-1fb213ece038.jpg?ts=1712325573",
    pname: "Nestle a+ Slim Skimmed Milk",
    weight: "1 L",
    price: 90,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/123007a.jpg?ts=1688973208",
    pname: "Gowardhan Classic Block Paneer",
    weight: "200 g",
    price: 89,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/87a72642-09d3-489f-a914-eb377d3ac820.jpg?ts=1712325556",
    pname: "Amul Gold Milk",
    weight: "1 L",
    price: 80,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6d13ee95-bf6c-4bfc-bcc8-4b7892ed6cd4.jpg?ts=1709808126",
    pname: "Amul Gold Chocolate Ice Cream Cone",
    weight: "80 g",
    price: 76,
    InStock: true,
    added: false,
    quantity: 1,
  },
  {
    image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478016a.jpg?ts=1679549334",
    pname: "Britannia Laughing Cow Cheese Slices",
    weight: "400 g",
    price: 295,
    InStock: true,
    added: false,
    quantity: 1,
  }
];

const container = document.querySelector(".catProduct");

const renderProducts = () => {
  container.innerHTML = '';
  data.map((product, index) => {
    const productElement = document.createElement("div");
    productElement.classList.add("pro");

    productElement.innerHTML = `
      <div class="proImg">
        <img src="${product.image}" alt="${product.pname}">
      </div>
      <div class="proName">
        <h1>${product.pname}</h1>
      </div>
      <div class="proWeight">
        <h1>${product.weight}</h1>
      </div>
      <div class="proBtn" id="proBtn-${index}">
        <div class="proPrice">
          <h1>₹ ${product.price}</h1>
        </div>
        ${product.added ? `
        <div class="cartQty">
          <button class="minusBtn">-</button>
          <h1>${product.quantity}</h1>
          <button class="plusBtn">+</button>
        </div>
        ` : `
        <button class="addBtn">ADD</button>
        `}
      </div>
    `;

    container.appendChild(productElement);

    const addButton = productElement.querySelector(".addBtn");
    const plusButton = productElement.querySelector(".plusBtn");
    const minusButton = productElement.querySelector(".minusBtn");

    if (addButton) {
      addButton.addEventListener("click", () => {
        product.added = true;
        renderProducts();
      });
    }

    if (plusButton) {
      plusButton.addEventListener("click", () => {
        product.quantity += 1;
        renderProducts();
      });
    }

    if (minusButton) {
      minusButton.addEventListener("click", () => {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          product.added = false;
          product.quantity = 1;
        }
        renderProducts();
      });
    }
  });

  const cartQtyElement = document.getElementById("q");
  const totalItems = data.reduce((acc, product) => acc + (product.added ? product.quantity : 0), 0);
  cartQtyElement.textContent = totalItems;
};

// document.querySelector(".cart").addEventListener("click", function(){
//   // window.location.replace("/cartSection/index.html")
// })




// Initial render
renderProducts();




// *********CartPage**************

let cartPage = document.querySelector(".cartPage")
let cart = document.querySelector(".cart")
let body = document.querySelector("body")

  cart.addEventListener("click", function(){ 
    cartPage.style.display = "block"
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    
  });


//   //**********Cart Page close ************/

  let close = document.querySelector("#close");

  close.addEventListener("click", ()=>{
    cartPage.style.display = "none";
    document.body.style.overflow = "auto";
  
  
  })
