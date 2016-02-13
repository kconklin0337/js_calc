$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var $display = $('#display');
  var lastOperation = '';
  var clearDisplay = true;


  $('#clear').on('click', clear);
 $('#plus').on('click', plus);
 $('#equal').on('click', equal);
 $('#subtract').on('click', subtract);
 $('#multiply').on('click', multiply);
 $('#divide').on('click', divide);
 $('.num').on('click', updateDisplay);
 $('#mem-plus').on('click', memAdd);
 $('#mem-minus').on('click', memSub);
 $('#mem-recall').on('click', memDisplay);
 $('#mem-clear').on('click', memClear);
 $('#squareroot').on('click', squareRoot);
 $('#percentage').on('click', percentage);



  function updateDisplay(){
      var num = $(this).text();
      if (clearDisplay === true || $display.text() === "0"){
            $display.text(num);
    }  else {

            $display.text($display.text() + num);
}
          clearDisplay = false;
}
  function divide(){
    lastOperation = $(this).text();
      if(calculator.current == 0){
          calculator.current = parseFloat($display.text());
    } else {

         calculator.result = calculator.current / parseFloat($display.text());
         $display.text(calculator.current);
}
          clearDisplay = true;
}

  function multiply(){
         lastOperation = $(this).text();
       if (calculator.current === 0){
          calculator.current = parseFloat($display.text());
    } else {
          calculator.current = calculator.current * parseFloat($display.text());
          $display.text(calculator.current);
}
        clearDisplay=true;
}

  function subtract(){
         lastOperation = $(this).text();
       if(calculator.current === 0){
          calculator.current = parseFloat($display.text());
    }  else {

          calculator.current = calculator.current - parseFloat($display.text());
          $display.text(calculator.current);
}
    clearDisplay=true;
}

  function equal(){
       if(lastOperation === ''){calculator.result = parseFloat($display.text());
    } else if(lastOperation === "/") {

        calculator.result = calculator.current / parseFloat($display.text());
        $display.text(calculator.result);
    } else if(lastOperation === "x"){

        calculator.result = calculator.current * parseFloat($display.text());
        $display.text(calculator.result);
    } else if(lastOperation === "+"){

        calculator.result = calculator.current + parseFloat($display.text());
        $display.text(calculator.result);
    } else if(lastOperation === "-"){

          calculator.result = calculator.current - parseFloat($display.text());
          $display.text(calculator.result);
        } else if(lastOperation === "√"){

              calculator.result = squareRoot($display.text());
              $display.text(calculator.result);
        } else if(lastOperation === "%"){

              calculator.result = calculator.current % (parseFloat($display.text()));
              $display.text(calculator.result);
    } else {

        $display.text(calculator.result);
}

       calculator.current = 0;
                 clearDisplay=true;
}

  function plus(){
               lastOperation = $(this).text();
          if(calculator.current === 0){
             calculator.current = parseFloat($display.text());
        } else {
             calculator.current = calculator.current + parseFloat($display.text());
             $display.text(calculator.current);
}
             clearDisplay=true;
}

function clear(){
             var num = "0"
                   lastOperation = '';
                   $display.text("0");
                   clearDisplay=true;
                   }

function memAdd(){
           calculator.memory = calculator.memory + parseFloat($display.text());
            clearDisplay=true
}

function memSub(){
           calculator.memory = calculator.memory - parseFloat($display.text());
            clearDisplay=true
}

function memClear(){
           calculator.memory = 0;
            clearDisplay=true;
}

function memDisplay(){
           $display.text(calculator.memory);
            clearDisplay=true;
}
function squareRoot(){
             lastOperation = $(this).text();
          if (calculator.current === 0){
              calculator.current = parseFloat($display.text());
      }  else {
              calculator.current = calculator.current + ($display.text());
              $display.text(calculator.current);
            {
              clearDisplay=true;
            }

          }
function percentage(){
              lastOperation = $(this).text();
         if (calculator.current === 0){
             calculator.current = parseFloat($display.text());
       } else {
             calculator.current = calculator.current % parseFloat($display.text)();
            $display.text(calculator.current);
          }
          clearDisplay=true;

        }}
// function backspace(){
//     calculator.current = value.substr(0, value.length - 1);
// }
});
