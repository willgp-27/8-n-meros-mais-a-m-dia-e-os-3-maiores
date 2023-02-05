const prompt = require('prompt-sync')();
var array = [];
var soma=0;

for (var i = 1; i <= 8; i++) {
  let num = parseInt(prompt("Insira um número:"));
   array.push(num);
    soma= soma+num;       
}
var media = soma / 8;  
console.log("media:"+ media);


for(var i =0; i<7; i++){
  if  (array[i] > media){
    console.log (array[i]); 
  }  
}
 