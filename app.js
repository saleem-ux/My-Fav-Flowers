function userNumber(){
 var userNumber=prompt('Please enter your lovely number')
 if(userNumber >=10){
  document.write('Orange lily');
  document.write( '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Liliumbulbiferumflowertop.jpg/220px-Liliumbulbiferumflowertop.jpg" >' );
 }else if(userNumber >= 5){
  document.write('Peach flower');
  document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Peach_flowers.jpg">');
 }else if(userNumber >= 0){
  document.write('Plumeria');
  document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Frangipani_flowers.jpg">');
 }
}
userNumber();

var userChoose;

function flowerName(){
  var flowerName = prompt('Hello, please enter your favorite Flower name');

 while(flowerName !== 'orange lily' && flowerName !== 'peach flower' && flowerName !== 'plumeria'){
  flowerName = prompt('Please enter the name plumeria or orange lily or peach flower');
 }


 if(flowerName === 'orange lily'){
 
  userChoose='<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Liliumbulbiferumflowertop.jpg/220px-Liliumbulbiferumflowertop.jpg" >';
 }else if(flowerName === 'peach flower'){
  
  userChoose='<img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Peach_flowers.jpg">';
 }else if(flowerName === 'plumeria'){
  
  userChoose='<img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Frangipani_flowers.jpg">';
 }


var imagesNumber= prompt('How many image do you want?');
for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}
}
flowerName();
