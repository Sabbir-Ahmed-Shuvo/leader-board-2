var changeColor = document.getElementById('colorRed');
changeColor.style.color = 'red';
var changeColor = document.getElementById('colorBlue');
changeColor.style.color = 'red';
var changeColor = document.getElementById('colorYellow');
changeColor.style.color = 'red';

//this is change background color
function getColor(){
    let bgColorChnage = document.getElementById('bgColor');
    bgColorChnage.style.backgroundColor = 'cyan';
}
// this is for list 
document.getElementById('add-item').addEventListener('click',function(){
  const li = document.createElement('li');
  li.innerText = 'sabbir';
  const parent = document.getElementById('list-item');
  parent.appendChild(li);
})

// this is for 0-5
document.getElementById('button').addEventListener('click',function(event){
  var inputNumber = document.getElementById('number');
  var newInput = inputNumber.value;
  if(newInput < 5){
    inputNumber.value= parseFloat (newInput) + 1
  }
  else if(inputNumber.value== 5){
  button.setAttribute('disabled', 'true');
  }                    
});