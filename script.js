function placeOrder() { //function for placing an order
  //get inputs from form
  let name = capitalize_inputs($("input#name").val());
  let flavor = $("#pizza-flavor").val();
  let size = $("#pizza-size").val();
  let crust = $("#pizza-crust").val();
  let number = $("#pizza-number").val();

  let sizeCost; 
  //set different prices for the different pizza flavors depending on their size

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

    //price calculation
    let price = (sizeCost + crustCost);
    let totalPrice = parseInt(price * number);

   
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