//Dynamically generate shopping pages and generate total shopping prices
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');
// Get all plus and minus buttons
var addButtons = document.querySelectorAll(".add");
var removeButtons = document.querySelectorAll(".remove");

// Obtain all quantity and price elements
var quantityElements = document.querySelectorAll(".quantity");
var priceElements = document.querySelectorAll("p");

// Obtain total price elements and payment buttons
var totalElement = document.querySelector(".total span");
var payButton = document.querySelector(".total button");

// Initialize the total price to 0
var totalPrice = 0;

// Handling the click event of the plus button
function handleAddClick(event) {
	// Find the corresponding quantity and price elements
	var parent = event.target.parentNode;
	var quantityElement = parent.querySelector(".quantity");
	var priceElement = parent.querySelector("p");

	// Increase the quantity by 1
	var quantity = parseInt(quantityElement.textContent);
	quantity++;
	quantityElement.textContent = quantity;

	// Calculate the price of a single item
	var price = parseFloat(priceElement.textContent.replace("$", ""));
	var productPrice = price * quantity;

	// Update total price
	totalPrice += price;
	totalElement.textContent = totalPrice.toFixed(2);
}

// Handling the click event of the minus button
function handleRemoveClick(event) {
	// Find the corresponding quantity and price elements
	var parent = event.target.parentNode;
    var quantityElement = parent.querySelector(".quantity");
    var priceElement = parent.querySelector("p");
    // Reduce quantity by 1
    var quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
    
        // Calculate the price of a single item
        var price = parseFloat(priceElement.textContent.replace("$", ""));
        var productPrice = price * quantity;
    
        // Update total price
        totalPrice -= price;
        totalElement.textContent = totalPrice.toFixed(2);
    }
    }
    
    // Add click events for the plus and minus buttons
    for (var i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", handleAddClick);
    }
    for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", handleRemoveClick);
    }
    
    // Handle the click event of the payment button
    payButton.addEventListener("click", function(event) {
    alert("Payment processed. Total price: $" + totalPrice.toFixed(2));
    });



    var index = 1;
    function lunbo(){
      index ++ ;
      //Determine if the index is greater than 3
      if(index >3){
          index = 1;
      }
      //Get img object
      var img = document.getElementById("lunbo_img");
      img.src = "lib"+index+".jpg";
    }
    //2. Define Timer
    setInterval(lunbo,2000);
    /*Remember that calling the lunbo method in the timer cannot add (), setInterval (lunbo, 2000); If () is added, 
    the lunbo() method will be executed, resulting in a timer。*/


    $(document).ready(function() {
			$("#first1").animate({left:'80px'});
		});
    
        $(document).ready(function() {
			$("#first3").animate({
        left:'220px',
      opacity:'0.5',
      height:'150px',
      width:'150px'
      
      });
		});
    $(document).ready(function(){
      $("#flip").click(function(){
        $("#panel").slideDown("slow");
      });
    });
















// This function closes navbar if user clicks anywhere outside of navbar once it's opened
// Does not leave unused event listeners on
// It's messy, but it works
function closeNavbar(e) {
  if (
    document.body.classList.contains('show-nav') &&
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle('show-nav');
    document.body.removeEventListener('click', closeNavbar);
  } else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', closeNavbar);
  }
}

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  document.body.addEventListener('click', closeNavbar);
});

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);