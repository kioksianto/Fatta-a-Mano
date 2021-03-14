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
  let inputtedFlavour = $("#pizza-flavour option:selected").val();
  let inputtedSIze = $("#pizza-size option:selected").val();
  let inputtedCrust = $("#pizza-crust option:selected").val();
  let inputtedTopping = $("#pizza-topping option:selected").val();
  let inputtedNumber = $("#quantity").val();
  
  console.log(inputtedCrust,inputtedName,inputtedFlavour,inputtedNumber, inputtedSIze)
  switch(pizzaSize){
    case "0": price = 0;
    break;
    case "larger-than-life": price = 1050;
    console.log(price);
    break;
    case "not-too-big": price = 850;
    console.log(price);
    break;
    case "a-bite": price = 450;
    console.log(price);
    default: console.log("error")
  }
  switch(crustType){
    case "0": crustPrice = 0;
    break;
    case "gluten-free": crustPrice = 100;
    console.log(crustPrice);
    break;
    case "stuffed": crustPrice = 200;
    console.log(crustPrice);
    break;
    case "crusty": crustPrice = 300;
    console.log(crustPrice);
    default: console.log("No Price")
  }
  var toppingPrice = selectedTopping.length * 150;
  console.log(toppingPrice);
  
  
  if ((pizzaSize == "0")){
    console.log("Nothing has been selected");
    $("button#placeorde").show();
    $("#form-error").show();
    $("#cart").hide();
    $("#delivery").hide();
    
  }
  else{
    $("button#placeorder").hide();
    $("#cart").slideDown(1000);
  
  //total price calculation
    total = price + crustPrice + toppingPrice;
    console.log(total)
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;
    
  
  var newOrder = new PizzaOrder(inputtedName, inputtedFlavour, inputtedSIze, inputtedCrust, inputtedNumber);
  $(".container-4").show();
  
  $("#cart-items").append("<tr><td id ='customer-name'>"+newOrder.name+"</td> <td id ='pizza-flavour'>"+newOrder.flavor+"</td><td id ='Pizza-size'>" +newOrder.size+ "</td><td id ='pizza-topping'>" +newOrder.toppings+"</td<td id ='pizza-crust'>"  +newOrder.crust+ "</td><td id ='pizza-quantity'>" +newOrder.number+"</td><td id ='pizza-price'>"   +newOrder.price+ "</td</tr>");
  
  console.log (newOrder);
  })})
  
  //Inhouse
  $("button#placeorder").click(function(){
    $("button#placeorder").hide();
    $("button#inhouse").slideDown(1000);
   //***********************
  
    console.log("Your total bill is Ksh" + checkoutTotal );
    $("#pizzatotal").append("Your bill is Ksh " + checkoutTotal);
  });
  
  //delivery option
  
  $("button#delivery").click(function(){
    $("button#delivery").hide();
    $(".card-4").slideDown(1000);
   //***********************
  
    console.log("Your total bill is Ksh" + checkoutTotal );
    $("#pizzatotal").append("Your bill is Ksh " + checkoutTotal);
  });
  