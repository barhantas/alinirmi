function decision() {
  console.log("AHOY ! I am gonna decide to what you should do !");
  var shouldBuyText;
  if (Math.random() > 0.5) {
    shouldBuyText = "BUY";
  } else {
    shouldBuyText = "SELL";
  }

  var myDiv = document.getElementById("what-i-sould-do");
  myDiv.innerHTML = "You sould " + shouldBuyText + " the currency($)";
}

decision();
