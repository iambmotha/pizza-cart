function PizzaBill() {
    var smlPizza = 0;
    var mdmPizza = 0;
    var lrgPizza = 0;

    function pizzaS() {
    smlPizza += 49.00;
    }

    function pizzaM() {
    mdmPizza += 99.00;
    }

    function pizzaL() {
   lrgPizza += 180.00;
    }

    function buySml() {
    return smlPizza
    }

    function buyMdm() {
    return mdmPizza
    }

    function buyLrg() {
    return lrgPizza
    }

    function pizzaCost() {
    return smlPizza + mdmPizza + lrgPizza 
    }

    return {
        pizzaS,
        pizzaM,
        pizzaL,
        buySml,
        buyMdm,
        buyLrg,
        pizzaCost
    }
}

const PayBtn = document.querySelector(".btn")
const input = document.querySelector(".input")
const message = document.querySelector(".message")

var smallPizza = document.querySelector(".totalSmall");
var mediumPizza = document.querySelector(".totalMedium");
var largePizza = document.querySelector(".totalLarge");
var totalAmount = document.querySelector(".priceTot");

const buySmallBtn = document.querySelector(".btnBuyS");
const buyMediumBtn = document.querySelector(".btnBuyM");
const buyLargeBtn = document.querySelector(".btnBuyL");

const pizzaBill = PizzaBill();

smallPizza.innerHTML = pizzaBill.buySml();
mediumPizza.innerHTML = pizzaBill.buyMdm();
largePizza.innerHTML = pizzaBill.buyLrg();
totalAmount.innerHTML = pizzaBill.pizzaCost();

buySmallBtn.addEventListener("click", function () {
    pizzaBill.pizzaS();
    smallPizza.innerHTML = pizzaBill.buySml();
    totalAmount.innerHTML = pizzaBill.pizzaCost();

});

buyMediumBtn.addEventListener("click", function () {
    pizzaBill.pizzaM();
    mediumPizza.innerHTML = pizzaBill.buyMdm();
    totalAmount.innerHTML = pizzaBill.pizzaCost();

});

buyLargeBtn.addEventListener("click", function () {
    pizzaBill.pizzaL();
    largePizza.innerHTML = pizzaBill.buyLrg();
    totalAmount.innerHTML = pizzaBill.pizzaCost();

});

PayBtn.addEventListener("click", function () {
    //alert("working")
    message.innerHTML = input.value
});


//totalAmount.innerHTML = totalP
//console.log(totalP)
//button.addEventListener("click", function(){
    //message.innerHTML = input.value
    //alert("hello")
    //if () {
        
    //}

//})
