(function($) {

    "use strict";

    var searchPopup = function() {
      // open search box
      $('#header-nav').on('click', '.search-button', function(e) {
        $('.search-popup').toggleClass('is-visible');
      });

      $('#header-nav').on('click', '.btn-close-search', function(e) {
        $('.search-popup').toggleClass('is-visible');
      });
      
      $(".search-popup-trigger").on("click", function(b) {
          b.preventDefault();
          $(".search-popup").addClass("is-visible"),
          setTimeout(function() {
              $(".search-popup").find("#search-popup").focus()
          }, 350)
      }),
      $(".search-popup").on("click", function(b) {
          ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
          $(this).removeClass("is-visible"))
      }),
      $(document).keyup(function(b) {
          "27" === b.which && $(".search-popup").removeClass("is-visible")
      })
    }

    var initProductQty = function(){

      $('.product-qty').each(function(){

        var $el_product = $(this);
        var quantity = 0;

        $el_product.find('.quantity-right-plus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            $el_product.find('#quantity').val(quantity + 1);
        });

        $el_product.find('.quantity-left-minus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            if(quantity>0){
              $el_product.find('#quantity').val(quantity - 1);
            }
        });

      });

    }

    $(document).ready(function() {

      searchPopup();
      initProductQty();

      var swiper = new Swiper(".main-swiper", {
        speed: 500,
        navigation: {
          nextEl: ".swiper-arrow-prev",
          prevEl: ".swiper-arrow-next",
        },
      });         

      var swiper = new Swiper(".product-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#mobile-products .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      });      

      var swiper = new Swiper(".product-watch-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#smart-watches .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      }); 

      var swiper = new Swiper(".testimonial-swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-arrow-prev",
          prevEl: ".swiper-arrow-next",
        },
      }); 

    }); 

})(jQuery);

// Product function
let row1 = document.getElementById("row1")
let row2 = document.getElementById("row2")
let row3 = document.getElementById("row3")
let row4 = document.getElementById("row4")
let row5 = document.getElementById("row5")
let row6 = document.getElementById("row6")
let row7 = document.getElementById("row7")
let row8 = document.getElementById("row8")
let row9 = document.getElementById("row9")
let row10 = document.getElementById("row10")

let phoneCategory;
let laptopsCategory;
let watches;
let fragrances;
let sunglasses;


// function fetchAllCategories(){
//   fetch('https://dummyjson.com/products/categories')
//   .then(res => res.json())
//   .then(console.log);
// }

// fetchAllCategories()


function fetchAllProducts(){
  fetch('https://dummyjson.com/products').then(res => res.json())
.then(res => {
  console.log(res.products);
   const allProducts = res.products;
    localStorage.setItem("allProducts", JSON.stringify(allProducts))
});
}

fetchAllProducts()

// function dispAllProd(products) {
//  let products = JSON.parse(localStorage.getItem("allProducts"))
//   phoneCategory = products.filter((el)=> el.category == "smartphones")
//   laptops = products.filter((el)=> el.category == "laptops")
//   watches = products.filter((el)=> el.category == "mens-watches")
//   fragrances = products.filter((el)=> el.category == "fragrances")
//   sunglasses = products.filter((el)=> el.category == "sunglasses")
  
//   let fragrances =  products.slice(3,4)  
//   fragrances.forEach((products) => {
//   row6.innerHTML += `
//       <a class="card col-lg-2 col-sm-4 itemcard" style="width: 11rem;" >
//          <img src="${product.images[0]}" class="card-img-top" alt="...">
//          <div class="card-body">
//             <p class="card-title">${product.title}</p>
//             <h5 class="card-text">$${product.price}</h5>
//          </div>
//      </a>
//      `

// });
// }
// dispAllProd()

function displayMore1(params) {
  let  theproducts = JSON.parse(localStorage.getItem("allProducts"))
  let  phoneCategory =  theproducts.slice(3,4)  
  phoneCategory.forEach((product)=> {
 row1.innerHTML += `
  <a class="card col-lg-2 col-sm-4 itemcard" style="width: 12rem;" href="addtocart.html?id=${product.id}">
     <img src="${product.images[0]}" class="card-img-top" alt="...">
     <div class="card-body">
        <p class="card-title">${product.title}</p>
        <h5 class="card-text">$${product.price}</h5>
     </div>
 </a>
 `
  });

}


displayMore1()


function displayMore2(params) {
  let  theproducts = JSON.parse(localStorage.getItem("allProducts"))
  let  phoneCategory =  theproducts.slice(3,4)  
  phoneCategory.forEach((product)=> {
 row2.innerHTML += `
  <a class="card col-lg-2 col-sm-4 itemcard" style="width: 12rem;" href="addtocart.html?id=${product.id}">
     <img src="${product.images[0]}" class="card-img-top" alt="...">
     <div class="card-body">
        <p class="card-title">${product.title}</p>
        <h5 class="card-text">$${product.price}</h5>
     </div>
 </a>
 `
  });

}


displayMore2()


function displayMore3(params) {
  let  theproducts = JSON.parse(localStorage.getItem("allProducts"))
  let  phoneCategory =  theproducts.slice(3,4)  
  phoneCategory.forEach((product)=> {
 row3.innerHTML += `
  <a class="card col-lg-2 col-sm-4 itemcard" style="width: 12rem;" href="addtocart.html?id=${product.id}">
     <img src="${product.images[0]}" class="card-img-top" alt="...">
     <div class="card-body">
        <p class="card-title">${product.title}</p>
        <h5 class="card-text">$${product.price}</h5>
     </div>
 </a>
 `
  });

}


displayMore3()

function displayMore4(params) {
  let  theproducts = JSON.parse(localStorage.getItem("allProducts"))
  let  phoneCategory =  theproducts.slice(3,4)  
  phoneCategory.forEach((product)=> {
 row4.innerHTML += `
  <a class="card col-lg-2 col-sm-4 itemcard" style="width: 12rem;" href="addtocart.html?id=${product.id}">
     <img src="${product.images[0]}" class="card-img-top" alt="...">
     <div class="card-body">
        <p class="card-title">${product.title}</p>
        <h5 class="card-text">$${product.price}</h5>
     </div>
 </a>
 `
  });

}

displayMore4()

function displayMore5(params) {
  let  theproducts = JSON.parse(localStorage.getItem("allProducts"))
  let  phoneCategory =  theproducts.slice(3,4)  
  phoneCategory.forEach((product)=> {
 row5.innerHTML += `
  <a class="card col-lg-2 col-sm-4 itemcard" style="width: 12rem;" href="addtocart.html?id=${product.id}">
     <img src="${product.images[0]}" class="card-img-top" alt="...">
     <div class="card-body">
        <p class="card-title">${product.title}</p>
        <h5 class="card-text">$${product.price}</h5>
     </div>
 </a>
 `
  });

}

displayMore5()

function display6(params) {
  let  theproducts = JSON.parse(localStorage.getItem("allProducts"))
  let  laptopsCategory =  theproducts.slice(1,2)  
  laptopsCategory.forEach((product)=> {
 row6.innerHTML += `
  <a class="card col-lg-2 col-sm-4 itemcard" style="width: 12rem;"  href="cart.html?id=${product.id}">
     <img src="${product.images[0]}" class="card-img-top" alt="...">
     <div class="card-body">
        <p class="card-title">${product.title}</p>
        <h5 class="card-text">$${product.price}</h5>
     </div>
 </a>
 `
  });

}


display6()