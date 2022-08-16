var nameError = document.getElementById("name-error")
var numberError = document.getElementById("number-error")
var dateError = document.getElementById("date-error")
var cvcError = document.getElementById("cvc-error") 

function validateName(){
    var name = document.getElementById('name').value
    if(name == " " || name.length == 0){
      nameError.innerHTML = "Can't be blank"
      document.getElementById('name').style.borderColor = 'hsl(0, 100%, 66%)'
      return false
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      nameError.innerHTML = 'Write full name';
      document.getElementById('name').style.borderColor = 'hsl(0, 100%, 66%)'
      return false;
    }
    nameError.innerHTML = '';
    document.getElementById("card_name").innerHTML = name
    document.getElementById('name').style.borderColor = 'hsl(278, 68%, 11%)'
    return true
  }
function validateCardNumber() {
  var number = document.getElementById('number').value
  if(number.length == 0){
    numberError.innerHTML = "Can't be blank"
    document.getElementById('number').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  if(number.length < 16 || number.length > 16){
    numberError.innerHTML = "Card Number should be 16 digits"
    document.getElementById('number').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  if(!number.match(/^[0-9]{16}$/)){
    numberError.innerHTML = "Wrong format, digits only"
    document.getElementById('number').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  numberError.innerHTML = ''
  document.getElementById("card-no").innerHTML = number
  document.getElementById('number').style.borderColor = 'hsl(278, 68%, 11%)'
  return true
}
function validateCvc(){
  var cvc = document.getElementById("cvc").value
  if(cvc.length == 0){
    cvcError.innerHTML = "Can't be blank"
    document.getElementById('cvc').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  if(cvc.length > 3 || cvc.length < 3){
    cvcError.innerHTML = "CVC should be 3 digits"
    document.getElementById('cvc').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  if(!cvc.match(/^[0-9]{3}$/)){
    cvcError.innerHTML = "Numbers only!"
    document.getElementById('cvc').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  cvcError.innerHTML = ""
  document.getElementById("card-cvc").innerHTML = cvc
  document.getElementById('cvc').style.borderColor = 'hsl(278, 68%, 11%)'
  return true
}
function validateDate(){
  var exp = document.getElementById("exp").value
  if(exp.length == 0){
    dateError.innerHTML = "Can't be blank"
    document.getElementById('exp').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  if(exp.length > 2 || exp.length < 2){
    dateError.innerHTML = "Dates should be 2 digits"
    document.getElementById('exp').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  if(!exp.match(/^[0-9]{2}$/)){
    dateError.innerHTML = "Numbers only!"
    document.getElementById('exp').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  dateError.innerHTML = ''
  document.getElementById("mm").innerHTML = exp
  document.getElementById('exp').style.borderColor = 'hsl(278, 68%, 11%)'
  return true
}
function validateDate2(){
  var exp2 = document.getElementById("exp2").value
  if(exp2.length == 0){
    dateError.innerHTML = "Can't be blank"
    document.getElementById('exp2').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  if(exp2.length > 2 || exp.length < 2){
    dateError.innerHTML = "Dates should be 2 digits"
    document.getElementById('exp2').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  if(!exp2.match(/^[0-9]{2}$/)){
    dateError.innerHTML = "Numbers only!"
    document.getElementById('exp2').style.borderColor = 'hsl(0, 100%, 66%)'
    return false
  }
  dateError.innerHTML = ''
  document.getElementById("yy").innerHTML = exp2
  document.getElementById('exp2').style.borderColor = 'hsl(278, 68%, 11%)'
  return true
}