function calc(){
  let a = parseInt(document.querySelector('#value1').value); //numbers are pulled from the form in form of a string parse int changes it to int type //
  let b = parseInt(document.querySelector('#value2').value);
  let op = document.querySelector('#operator').value;
  let calculate; // declare first so as not to declare multiple times inside the code which would mess up the calculation //
  
  if (op=='add'){
      calculate = a  + b;
  }else if (op=='min'){
      calculate = a  - b;
  }else if (op=='div'){
      calculate = a  / b;
  }else if (op=='mul'){
      calculate = a  * b;
  }
  console.log(calculate);
  document.querySelector("#result").innerHTML = calculate; // outputs to the website
}
