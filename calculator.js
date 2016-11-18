function calculator (operation,a,b) {
  if (operation == 'add') {
    console.log(a + b);
  }
  else if (operation == 'subtract') {
    console.log(a - b);
  }
  else if (operation == 'multiply') {
    console.log(a * b);
  }
  else if (operation == 'divide') {
    console.log (a / b);
  }
}


calculator('divide',2,3)