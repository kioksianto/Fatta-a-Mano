
function PizzaOrder (flavor, size, crust, quantity){
    this.size = size
    this.crust = crust
    this.number = number
    this.flavor = flavor
}

let sizeCost; 
  //set different prices for the different pizza flavors depending on their size
  PizzaOrder.prototype.sizeCost = function(){
    if (flavor === "Hawaiian" || flavor === "Margharita" || flavor === "Marinara" || flavor === "Mushroom" || flavor === "Veggie" 
    || flavor === "Oyster"|| flavor === "Pepperoni" || flavor === "Pulled Pork"|| flavor === "Spicy Veggie") {
        if (size === "Larger than life") {
            sizeCost = 1050;
        } else if (size === "Not too big") {
            sizeCost = 850;
        } else if (size === " A bite") {
            sizeCost = 450;
        }
      }
  }
  PizzaOrder.prototype.crustCost = function(){
  
    var crustCost; 
    //set prices for different crust types
    if (crust === "Gluten Free") {
        crustCost = 230;
    } else if (crust === "Stuffed") {
        crustCost = 200;
    } else if (crust === "Crusty") {
        crustCost = 150;
    } else if (crust === "None") {
        crustCost = 0;
        
    } 

  }
let totalCost;
  PizzaOrder.prototype.totalCost = function(sizeCost, crustCost){

    grandCost = sizeCost + crustCost
  }
  console.log (totalCost);


$(document).ready(function() {
  $("#orders").submit(function(event){
        event.preventDefault();
let name = capitalize_inputs($("#name").val());
let flavor = $("#pizza-flavor option:selected").val();
let size = $("#pizza-size option:selected").val();
let crust = $("#pizza-crust option:selected").val();
let number = $("#pizza-number").val();

console.log (name)
})})


  




























// function placeOrder() {  //function for placing an order
//   //get inputs from form
//   $(document).ready(function(event){ event.preventDefault()

//   let name = capitalize_inputs($("#name").val());
//   let flavor = $("#pizza-flavor option:selected").val();
//   let size = $("#pizza-size option:selected").val();
//   let crust = $("#pizza-crust option:selected").val();
//   let number = $("#pizza-number").val();
//   console.log(size);

//   let sizeCost; 
//   //set different prices for the different pizza flavors depending on their size
//   if (flavor === "Hawaiian" || flavor === "Margharita" || flavor === "Marinara" || flavor === "Mushroom" || flavor === "Veggie" 
//   || flavor === "Oyster"|| flavor === "Pepperoni" || flavor === "Pulled Pork"|| flavor === "Spicy Veggie") {
//       if (size === "Larger than life") {
//           sizeCost = 1050;
//       } else if (size === "Not too big") {
//           sizeCost = 850;
//       } else if (size === " A bite") {
//           sizeCost = 450;
//       }
//     }
//     var crustCost; 
//     //set prices for different crust types
//     if (crust === "Gluten Free") {
//         crustCost = 230;
//     } else if (crust === "Stuffed") {
//         crustCost = 200;
//     } else if (crust === "Crusty") {
//         crustCost = 150;
//     } else if (crust === "None") {
//         crustCost = 180;
//     } 

//     //price calculation
//     let price = (sizeCost + crustCost);
//     let totalPrice = parseInt(price * number);

// //    $(document).ready(function(){ 
      
//     // $('#deliveryoption','#deliveryconfirmation','#price').hide();
//     (function(){
//         $('#placeorder').click();
//         $('#deliveryoption').show();
//     });

//     $('#inhouse').click(function(){
//         $('#price').show();
//         $('#deliveryoption').hide();

//     });

//     $('#delivery').click(function(){
//         $('#deliveryconfirmation').show();
//         $('#deliveryoption').hide();
//         var location = capitalize_inputs($("input#location").val()); 
//         //get delivery details
//         $(".location").text(location);
//     });

//     $('#checkout').click(function(){
//         $('#price').show();
//         $('#deliveryconfirmation').hide();
//     });


//    })
// }