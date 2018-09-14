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
      this.calculator.push($("#button-" + i).val());
    }
  },

  numeroSelect: function(result) {
    if ( this.opSelect == false ) {
      this.firstNumber += result
      $("#first-number").append(result)
      } else {
        this.secondNumber += result
      $("#second-number").append(result)
      }
  },
    
  operatorSelect: function(result) {
    this.operator = result
    this.opSelect = true
  },

  operatorAppend: function(result) {
    $("#operator").append(result)
  },
  
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
        $("#result").text(this.equal)
  },

  clearMe: function() {
    $("#history").append(this.firstNumber + " " + $("#operator").text() + " " + this.secondNumber + " = " + this.equal + "<br>");
    this.firstNumber = " ";
    this.secondNumber = " ";
    this.equal = 0;
    this.operator = " ";
    this.opSelect = false;
    $("#first-number, #second-number, #operator, #result").empty();
  },

  clearHistory: function() {
    $("#history").empty();
  }

  };

$(document).ready(function() {

  calC.setUp();

});

$(".number").click(function() {

  var selection1 = $(this).val();
  calC.numeroSelect(selection1);

});

$(".operator").click(function() {

  var selection2 = $(this).val();
  calC.operatorSelect(selection2);

  var selection3 = $(this).text();
  calC.operatorAppend(selection3);

});

$(".equal").click(function() {

  calC.getmeResults();

});

$(".clear").click(function() {

  calC.clearMe();

});

$(".history").click(function() {

  calC.clearHistory();

});

    