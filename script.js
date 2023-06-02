const slideshow = document.querySelectorAll('.large');
const bulletImages = document.querySelectorAll('.small');
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');
slideshow.forEach((slide, indx) => {
slide.style.transform = `translateX(${indx * 100}%)`
})


document.querySelector('.badges').style.display = "none"

let current = 0;
let maxSlide = slideshow.length - 1 ;
nextBtn.addEventListener("click", () => change("right"));
prevBtn.addEventListener("click", () => change("left"));

const change = (direction) => {
    if(direction === "right"){
        if(current >= maxSlide){
            current = 0;
        }
        else{
        current++;
        }
        
       
    slideshow.forEach((slide, indx) => {
slide.style.transform = `translateX(${(current - indx) * 100}%)`
//console.log(indx)
}) 
    }
    else if(direction === "left"){
        if(current < 1){
            current = maxSlide ;
        }
       else{
         current--
       }
       
    slideshow.forEach((slide, indx) => {
slide.style.transform = `translateX(${(current - indx) * 100}%)`
//console.log(indx)


})

    }
    bullet()
}
function bullet () {
   
removeCurrentClasses()
 bulletImages[current].classList.add('current')
   
}


function removeCurrentClasses(){
  bulletImages.forEach((bulletimg , indx)=>{
        bulletimg.classList.remove('current')
    })   
  
}

let newPrice = document.querySelector('#newprice').value;
let Price = document.querySelector('#price').value;
let display = document.querySelector('#display').value;
let percent = document.querySelector('#percent').value;
const plusBtn = document.querySelector('.btn-plus');
const minusBtn = document.querySelector('.btn-minus');
const AddCart = document.querySelector('.bottom-cart');
let pricey =  document.querySelector('#pricey');
let newPricey =  document.querySelector('#newpricey');
let percenty =  document.querySelector('#percenty');
const badges = document.querySelector(".badges");


const cartDetails = document.querySelector(".cart-info")


let discount = parseFloat(Price) * parseFloat(percent) / 100

pricey.innerText = "$" + Price 

newPricey.innerText = "$" + discount + ".00";
let tobeCarted = 
newPricey.innerText = "$" + discount + ".00";
percenty.innerText = percent + "%"
console.log(parseInt(Price))
console.log(parseInt(percent))
let amount = 0 ;
let totalDiscount;
function priceCalculate () {

console.log(discount)
 totalDiscount = parseFloat(amount) * discount;
let  totalPrice = parseFloat(amount) * parseFloat(Price);
//  console.log(totalDiscount)
document.querySelector("#price").value = "$" + totalPrice;
document.querySelector("#price").innerText  = "$" + totalPrice;
document.querySelector("#newprice").value = "$" + totalDiscount;
document.querySelector("#newprice").innerText = "$" + totalDiscount;

}

plusBtn.addEventListener("click", function() {
    if(amount >= 100){
        // plusBtn.setAttribute("disabled", "disabled");
alert("You can't order more than 100 goods at once")
    }
    else{
            plusBtn.setAttribute("enabled", "enabled");
   amount = document.querySelector("#display").value;
   amount++;
    document.querySelector("#display").value = amount;
    // console.log(totalDiscount)
        }
        priceCalculate()
//         cartShow()

//         if(amount > 0){
   
// cartDetails.innerHTML = `
//      <div class="filled">
// <div class="details">
// <div class="cart-img">
// <img src="images/image-product-1.jpg" alt="large1">
// </div>
// <p class="name">Fall Limited Edition Sneakers
//   <span class="cart-price">${tobeCarted}</span>
//   x
//   <span class="cart-total">$${totalDiscount}</span>
// </p>
// <button class="delete-btn"><img src="images/icon-delete.svg" alt="delete"></button>
// </div>
// <button class="header-checkout">Checkout</button>
//               </div>

// `

// const deleteBtn = document.querySelector(".delete-btn");

// deleteBtn.addEventListener("click", () => {

//          cartDetails.innerHTML = `
    
//           <div class="empty">
//               <p class= "empty-text">Your cart is empty</p>
//               </div>`
//               document.querySelector('#display').value = 0;
//               amount =  document.querySelector('#display').value
// })


// const checkOutBtn = document.querySelector(".header-checkout");

// checkOutBtn.addEventListener("click", () => {

//          cartDetails.innerHTML = `
    
//           <div class="empty">
//               <p class= "empty-text">Proceed to Payment Page</p>

// <button class="header-checkout">Payment Page</button>
//               </div>
//               </div>`
// })
//     }
   
        
})


minusBtn.addEventListener("click", function() {
   
    if(amount <= 0){
        // minusBtn.setAttribute("disabled", "disabled");
amount === 0
document.querySelector("#display").value = amount;
    }
    else{
            // // // minusBtn.removeAttribute("enabled", "enabled");

    amount = document.querySelector("#display").value;
          amount--;
          document.querySelector("#display").value = amount;
    
    // console.log(totalDiscount)
        }
        priceCalculate()
        // cartShow()


// if(amount > 0){
   
//  cartDetails.innerHTML = `
//      <div class="filled">
// <div class="details">
// <div class="cart-img">
// <img src="images/image-product-1.jpg" alt="large1">
// </div>
// <p class="name">Fall Limited Edition Sneakers
//   <span class="cart-price">${tobeCarted}</span>
//   x
//   <span class="cart-total">$${totalDiscount}</span>
// </p>
// <button class="delete-btn"><img src="images/icon-delete.svg" alt="delete"></button>
// </div>
// <button class="header-checkout">Checkout</button>
//               </div>

// `

// const deleteBtn = document.querySelector(".delete-btn");

// deleteBtn.addEventListener("click", () => {

//          cartDetails.innerHTML = `
    
//           <div class="empty">
//               <p class= "empty-text">Your cart is empty</p>
//               </div>`
// })

// const checkOutBtn = document.querySelector(".header-checkout");

// checkOutBtn.addEventListener("click", () => {

//          cartDetails.innerHTML = `
    
//           <div class="empty">
//               <p class= "empty-text">Proceed to Payment Page</p>

// <button class="header-checkout">Payment Page</button>
//               </div>
//               </div>`
// })
//     }
   })

function slideExact () {
    
    slideshow[0].src
}
function cartShow() {
    document.querySelector('#display').value = amount
    if(amount > 0){
   
   document.querySelector(".cart-info").innerHTML = `
     <div class="filled">
<div class="details">
<div class="cart-img">
<img src="images/image-product-1.jpg" alt="large1">
</div>
<p class="name">Fall Limited Edition Sneakers
  <span class="cart-price">${tobeCarted}</span>
  x
  <span class="cart-total">$${totalDiscount}.00</span>
</p>
<button class="delete-btn"><img src="images/icon-delete.svg" alt="delete"></button>
</div>
<button class="header-checkout">Checkout</button>
              </div>
`
  if(amount <= 0 ){
    
    document.querySelector('.badges').style.display = "none"
  }else{
document.querySelector('.badges').style.display = "block"
document.querySelector('.badges').innerText = amount
}
const deleteBtn = document.querySelector(".delete-btn");

deleteBtn.addEventListener("click", () => {

         
    document.querySelector(".cart-info").innerHTML = `
    
          <div class="empty">
              <p class= "empty-text">Your cart is empty</p>
              </div>`

               document.querySelector('#display').value = 0;
     amount =  document.querySelector('#display').value
document.querySelector('.badges').style.display = "none"

     priceCalculate()
})
    }
   else{
         
    document.querySelector(".cart-info").innerHTML = `
    
          <div class="empty">
              <p class= "empty-text">Your cart is empty</p>
              </div>`
   

}

}
// cartShow()


const cartBtn = document.querySelector(".cart-btn");
const cartItems = document.querySelector(".cart-items")

cartBtn.addEventListener("click", () => {
    cartItems.classList.toggle('show')
})





const checkout = document.querySelector('.checkout');


checkout.addEventListener("click", () =>{
    // checkout.style.backgroundColor = "red"
cartShow()
});


const closeBtn = document.querySelector('.close-btn');
const carousel = document.querySelector('.carousel');

closeBtn.addEventListener("click", () =>{
    carousel.style.display= "none"
    document.body.classList.remove('body')
})

let x =0;

bulletImages.forEach((bullet, indx) => {
    
        bullet.addEventListener("click", function () {
           removeClasses()
            bullet.classList.add('current')
    if(x > bulletImages.length){
        x = 0
    }
    /* As long as the indx is greater than 0(X) it will be translated back to the center of the carousel i then call back formerslides which returns the others back to their original positions  */
   if(indx > x){
    formerSlides();
    /*Indx - indx = 0 instead of directlty typing zero and 400px is the width of my carousel container */
slideshow[indx].style.transform = `translateX(-${(indx - (indx )) * 400}px)` 

    }
  
    else if(indx === 0){
        formerSlides()
        /* If my slide index is the first bullet  image it will bring it to zero*/
        slideshow[indx].style.transform = `translateX(-${(indx - 1) * 400}px)`
        
    }
    else{
     slideshow[indx].style.transform = `translateX(${((indx + 1) - (indx )) * 400}px)`    
    }
    current = indx
    //  x = indx++; ;
   // a = indx - 1;
 //    console.log(a)
  //   console.log(indx)
    })
})

function formerSlides() {

slideshow.forEach((slide, indx) => {
slide.style.transform = `translateX(${indx * 100}%)`
})
}
function removeClasses(){
  bulletImages.forEach((bulletimg , indx)=>{
        bulletimg.classList.remove('current')
    })   
  
}

let carouselBtn = document.querySelector('.large-carousel-btn');

carouselBtn.addEventListener("click", () =>{
    carousel.style.display = "block"
    document.body.classList.add('body')
})


const bulletNoLightHouse = document.querySelectorAll('.small-btn');
const slideshowNoLightHouse = document.querySelectorAll('.large-btn');

let y =0;
formerNoLightSlides()
bulletNoLightHouse.forEach((bulletNolight, indx) => {
    
        bulletNolight.addEventListener("click", function () {
           removeNoClasses()
            bulletNolight.classList.add('current')
    if(y > bulletNolight.length){
        y = 0
    }
    /* As long as the indx is greater than 0(X) it will be translated back to the center of the carousel i then call back formerslides which returns the others back to their original positions  */
   if(indx > y){
    formerNoLightSlides();
    /*Indx - indx = 0 instead of directlty typing zero and 400px is the width of my carousel container */
slideshowNoLightHouse[indx].style.transform = `translateX(-${(indx - (indx )) * 400}px)` 
    }
  
    else if(indx === 0){
        formerNoLightSlides()
        /* If my slide index is the first bullet  image it will bring it to zero*/
        slideshowNoLightHouse[indx].style.transform = `translateX(-${(indx - 1) * 400}px)`
    }
    else{
     slideshowNoLightHouse[indx].style.transform = `translateX(${((indx + 1) - (indx )) * 400}px)`    
    }

  //   console.log(indx)
    })
})

function formerNoLightSlides() {

slideshowNoLightHouse.forEach((slider, indx) => {
slider.style.transform = `translateX(${indx * 100}%)`
})
}
function removeNoClasses(){
  bulletNoLightHouse.forEach((bulletNolight , indx)=>{
        bulletNolight.classList.remove('current')
    })   
  
}



const burger = document.querySelector('.burger');
const NavBar = document.querySelector('.nav-links');


burger.addEventListener("click", () => {
     
     NavBar.classList.toggle('nav-open')
burger.classList.toggle('toggle')    
});



