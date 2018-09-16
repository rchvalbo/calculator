//Calculator Logic. This calculator is an object called calC.

var calC = {

  //Setup initial properties
  firstNumber: " ",
  operator: " ",
  opSelect: false,
  secondNumber: " ",
  calculator: [],
  equal: 0,

  setUp: function() {
    for ( let i = 0; i<10; i++ ) {
      //What does this do? I didn't see where you actually used this array...
      this.calculator.push($("#button-" + i).val());
    }
  },

  numeroSelect: function(result) {
    if ( this.opSelect == false ) {
      this.firstNumber += result
      // $("#first-number").append(result)
      } else {
        this.secondNumber += result
      // $("#second-number").append(result)
      }
  },
    
  operatorSelect: function(result) {
    this.operator = result
    this.opSelect = true
  },


  // operatorAppend: function(result) {
  //   $("#operator").append(result)
  // },
  
  getmeResults: function() {
    this.firstNumber = parseInt(this.firstNumber)
      this.secondNumber = parseInt(this.secondNumber)
        if ( this.operator === "plus" ) {
          this.equal = this.firstNumber + this.secondNumber;
        } else if ( this.operator === "minus" ) {
          this.equal = this.firstNumber - this.secondNumber; 
        } else if ( this.operator === "times" ) {
          this.equal = this.firstNumber * this.secondNumber;
        } else if ( this.operator === "divide" ) {
            this.equal = this.firstNumber / this.secondNumber;
        } else if ( this.operator === "power" ) {
            this.equal = Math.pow(this.firstNumber, this.secondNumber);
        }
        // $("#result").text(this.equal)
  },

  clearMe: function() {
    // $("#history").append(this.firstNumber + " " + $("#operator").text() + " " + this.secondNumber + " = " + this.equal + "<br>");
    this.firstNumber = " ";
    this.secondNumber = " ";
    this.equal = 0;
    this.operator = " ";
    this.opSelect = false;
    // $("#first-number, #second-number, #operator, #result").empty();
  },

  clearHistory: function() {
    $("#history").empty();
  }

  };

$(document).ready(function() {

  //What does this do? Nothing happens when I comment it out.
  calC.setUp();

});

$(".number").click(function() {
  var selection1 = $(this).val();
  calC.numeroSelect(selection1);

  /* Using the opSelect variable that you created in order to see if the operator was clicked. */
  calC.opSelect ? $("#second-number").text(calC.secondNumber) : $("#first-number").text(calC.firstNumber)
});

$(".operator").click(function() {

  /* Commented Out the jQuery append. */
  var selection2 = $(this).val();
  calC.operatorSelect(selection2);
  var selection3 = $(this).text();
  $("#operator").text(selection3);
  // calC.operatorAppend(selection3);
});

$(".equal").click(function() {

  // getMeResults sets the equal variable in the object. Knowing this you can use it here.
  calC.getmeResults();
  $("#result").text(calC.equal);

});

$(".clear").click(function() {

  $("#history").append(calC.firstNumber + " " + $("#operator").text() + " " + calC.secondNumber + " = " + calC.equal + "<br>");

  calC.clearMe();

  $("#first-number, #second-number, #operator, #result").empty();
});

$(".history").click(function() {

  //calC.clearHistory();
  $("#history").empty();

});

    