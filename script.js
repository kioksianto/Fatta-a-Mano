function PizzaOrder(name,flavour, size, crust, toppings, number){
  this.name = name
  this.size = size
  this.crust = crust
  this.number = number
  this.flavor = flavour
  this.toppings = toppings
}
$(document).ready(function() {

  //placeorder button
  $("#orders").submit(function(event){
        event.preventDefault();
let inputtedName = $("#name").val();
let inputtedFlavour = $("#flavor option:selected").val();
let inputtedSIze = $("#size option:selected").val();
let inputtedCrust = $("#crust option:selected").val();
let inputtedToppings = $("#toppings option:selected").val();
let inputtedNumber = $("#quantity").val();

// switch(inputtedSize){
//   case "0": price = 0;
//   break;
//   case "larger than life": price = 1050;
//   console.log(price);
//   break;
//   case "Not too big": price = 800;
//   console.log(price);
//   break;
//   case "A bite": price = 450;
//   console.log(price);
//   default: console.log("error")
// }
// switch(inputtedCrust){
//   case "0": crustPrice = 0;
//   break;
//   case "Gluten Free": crustPrice = 100;
//   console.log(crustPrice);
//   break;
//   case "Stuffed": crustPrice = 150;
//   console.log(crustPrice);
//   break;
//   case "Crusty": crustPrice = 250;
//   console.log(crustPrice);
//   default: console.log("No Price")
// }

// if ((pizzaSize == "0")){
//   console.log("Nothing has been selected");

  
// }
// else{
//   $("button#placeorder").hide();
//   $(".container-4").slideDown(1000);
  
// }
// total = price + crustPrice;
// console.log(total)
// let checkoutTotal = 0;
// checkoutTotal = checkoutTotal + total;


// $("#customer-name").html($("#name option:selected").val());
// $("#pizza-flavor").html($("#flavor option:selected").val());
// $("#pizza-size").html($("#size option:selected").val());
// $("#pizza-toppings").html("#toppings option:selected").val());
// $("#pizza-price").html(total);


console.log(inputtedCrust,inputtedName,inputtedFlavour,inputtedNumber, inputtedSIze, inputtedToppings)

var newOrder = new PizzaOrder(inputtedName, inputtedFlavour, inputtedSIze, inputtedCrust, inputtedToppings, inputtedNumber);
$(".container-4").slideDown(1000);

$("#cart-items").append("<tr><td id ='customer-name'>"+newOrder.name+"</td> <td id ='pizza-flavor'>"+newOrder.flavor+"</td><td id ='Pizza-size'>" +newOrder.size+ "</td><td id ='pizza-toppings'>" +newOrder.toppings+"</td><td id ='pizza-crust'>"  +newOrder.crust+ "</td><td id ='pizza-quantity'>" +newOrder.number+"</td><td id ='pizza-price'>"   +newOrder.price+ "</td</tr>");

console.log (newOrder);

//deliveryOptions
$("button#inhouse").click(function(){
  $("button#placeorder").hide();
  $(".container-4").hide();
  $(".container-6").slideDown(1000);
});

$("button#delivery").click(function(){
  $("button#placeorder").hide();
  $(".container-4").hide();
  $(".container-5").slideDown(1000);
});

$("button#checkout").click(function(){
  $("button#placeorder").hide();
  $(".container-5").hide();
  $(".container-6").slideDown(1000);
});


})})


