
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

var total_price=Number($("#total_price_input").val());

if (total_price>0) {total_price-=250;} //we remove the delivery cost first
var price=0;
var toppings_price={"bacon":140,"mushroom":100,"spinach":80};
var crust_price={"gluten free":100,"stuffed":170,"crusty":300};
price+=toppings_price[inputtedToppings.toLowerCase()]+crust_price[inputtedCrust.toLowerCase()];

switch(inputtedFlavour.toLowerCase())
{
	case "hawaiian":
		var pizza_size_price={"larger than life":1350,"not too big":1000,"a bite":600};
		price+=pizza_size_price[inputtedSIze.toLowerCase()];
		break;
	case "margharita":
		var pizza_size_price={"larger than life":1200,"not too big":900,"a bite":500};
		price+=pizza_size_price[inputtedSIze.toLowerCase()];
		break;
	case "marinara":
		var pizza_size_price={"larger than life":1500,"not too big":1100,"a bite":500};
		price+=pizza_size_price[inputtedSIze.toLowerCase()];
		break;
	case "mushroom":
		var pizza_size_price={"larger than life":1000,"not too big":800,"a bite":400};
		price+=pizza_size_price[inputtedSIze.toLowerCase()];
		break;
	case "veggie":
		var pizza_size_price={"larger than life":1000,"not too big":800,"a bite":400};
		price+=pizza_size_price[inputtedSIze.toLowerCase()];
		break;
	case "oyster":
		var pizza_size_price={"larger than life":1550,"not too big":1150,"a bite":550};
		price+=pizza_size_price[inputtedSIze.toLowerCase()];
		break;
	case "pepperoni":
		var pizza_size_price={"larger than life":1400,"not too big":1050,"a bite":750};
		price+=pizza_size_price[inputtedSIze.toLowerCase()];
		break;
	case "pulled pork":
		var pizza_size_price={"larger than life":1450,"not too big":1100,"a bite":750};
		price+=pizza_size_price[inputtedSIze.toLowerCase()];
		break;
	case "spicy veggie":
		var pizza_size_price={"larger than life":1050,"not too big":850,"a bite":450};
		price+=pizza_size_price[inputtedSIze.toLowerCase()];
		break;
	
}


price*=inputtedNumber;
console.log(inputtedCrust,inputtedName,inputtedFlavour,inputtedNumber, inputtedSIze, inputtedToppings)

total_price+=price;
document.getElementById("total_price_input").value=total_price;
document.getElementById("total_pizza_cost").innerHTML=total_price;
total_price+=250; //for the delivery price
document.getElementById("overall_total_cost").innerHTML=total_price;


var newOrder = new PizzaOrder(inputtedName, inputtedFlavour, inputtedSIze, inputtedCrust, inputtedToppings, inputtedNumber,price);
$(".container-4").slideDown(1000);

$("#cart-items").append("<tr>\
	<td id ='customer-name'>"+newOrder.name+"</td>\
	<td id ='pizza-flavor'>"+newOrder.flavor+"</td>\
	<td id ='Pizza-size'>" +newOrder.size+ "</td>\
	<td id ='pizza-toppings'>" +newOrder.toppings+"</td>\
	<td id ='pizza-crust'>"  +newOrder.crust+ "</td>\
	<td id ='pizza-quantity'>" +newOrder.number+"</td>\
	<td id ='pizza-price'>"   +price+ "</td</tr>");

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
  //$("button#placeorder").hide();
  $(".container-5").hide();
  $(".container-6").slideDown(1000);
  
  var overall_total_cost=document.getElementById("overall_total_cost").innerHTML;
  var delivery_location=document.getElementById("location").value;
  document.getElementById("checkout_overall_cost").innerHTML="sh. "+overall_total_cost;
  document.getElementById("delivery_location").innerHTML=delivery_location;
});


})})




  




























