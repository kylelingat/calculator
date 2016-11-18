function calculator (operation,a,b) {
  if (operation == 'add' || operation == 'addition') {
    console.log(a + b);
  }
  else if (operation == 'subtract' || operation == 'subtraction') {
    console.log(a - b);
  }
  else if (operation == 'multiply' || operation == 'multiplication' ) {
    console.log(a * b);
  }
  else if (operation == 'divide' || operation == 'division') {
    console.log (a / b);
  }
}


calculator('division',9,3)
