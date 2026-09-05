const reservationform = document.querySelector(".reservation-form");
const successMessage = document.querySelector(".success-message");



 reservationform.addEventListener("submit" , (e) =>{
  e.preventDefault();

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const date = document.querySelector("#date");
  const time = document.querySelector("#time");
  const guests = document.querySelector("#guests");
  

  const nameValue = name.value;
  const emailValue = email.value;
  const dateValue = date.value;
  const timeValue = time.value;
  const guestsValue = guests.value;


  if (nameValue === "" || emailValue === ""
    || dateValue === "" || timeValue=== "" || guestsValue === ""){
      
      successMessage.textContent = "Please fill all details.";
    }else{
  
     successMessage.textContent = "Your table has been reserved!";
    reservationform.reset();
    };
    
    

 });

const categoryButtons = document.querySelectorAll(".menu-item");
const menuCard = document.querySelectorAll(".menu-card");


 categoryButtons.forEach(buttons => {
 buttons.addEventListener("click", () => {
 const selectedCategory = buttons.dataset.category;

 menuCard.forEach(cards => {
 const cardCategory = cards.dataset.category;


 if (selectedCategory === "All" ){
 cards.style.display = "flex";
} else if (selectedCategory === cardCategory ){
 cards.style.display = "flex";
 } else {
  cards.style.display = "none";
 }

 

 });

 });
 
 });


categoryButtons.forEach( button =>{


button.addEventListener("click", () =>{

categoryButtons.forEach( bttn =>{
  bttn.classList.remove("active");
  })
  
button.classList.add("active");

});
});
 


const addButtons = document.querySelectorAll(".add-btn");

const cartCount = document.querySelector("#cart-count");

const cartTotal = document.querySelector("#cart-total");



let itemCount = 0;
let totalAmount = 0;



addButtons.forEach((button) => {
  button.addEventListener("click", () => {

        const card = button.closest(".menu-card");

        const priceText = card.querySelector(".about-item span").textContent;

        const price = Number(priceText.replace("₹", ""));

        itemCount++;

        totalAmount += price;

        cartCount.textContent = itemCount;

        cartTotal.textContent = `₹${totalAmount}`;

    });

});



const links = document.querySelector(".links");

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click" , () => {
  links.classList.toggle("active");
  });
  


const themeBtn = document.querySelector(".theme-btn");


themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeBtn.textContent = "🌙";
  } else {
    themeBtn.textContent = "☀️";
  }

});