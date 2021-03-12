function placeOrder() { //function for placing an order
  //get inputs from form
  let name = capitalize_inputs($("input#name").val());
  let flavor = $("#pizza-flavor").val();
  let size = $("#pizza-size").val();
  let crust = $("#pizza-crust").val();
  let number = $("#pizza-number").val();

  let sizeCost; 
  //set different prices for the different pizza flavors depending on their size
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
    var crustCost; 
    //set prices for different crust types
    if (crust === "Gluten Free") {
        crustCost = 230;
    } else if (crust === "Stuffed") {
        crustCost = 200;
    } else if (crust === "Crusty") {
        crustCost = 150;
    } else if (crust === "None") {
        crustCost = 180;
    } 

   
    $('#deliveryoption','#deliveryconfirmation','#price').hide();
    (function(){
        $('#placeorder').click();
        $('deliveryoption').show();
    });

    $('#inhouse').click(function(){
        $('#price').show();
        $('deliveryoption').hide();

    });

    $('#delivery').click(function(){
        $('#deliveryconfirmation').show();
        $('deliveryoption').hide();
        var location = capitalize_inputs($("input#location").val()); 
        //get delivery details
        $(".location").text(location);
    });

    $('#checkout').click(function(){
        $('#price').show();
        $('deliveryconfirmation').hide();
    });

}