const input = document.getElementById("input-field");

let plus = "+";
let minus = "-";
let multiply = "*";
let divide = "/";
let dot = ".";


function numericalNum (a){
  input.value += a
}
function operators(a){
    if(input.value[input.value.length - 1] === a){
      a = "";
    }
    input.value += a;          
}

function equal(){
    if(input.value === ""){
        input.value = 0
    }else{
        input.value = eval(input.value)    
    }
}

function clearInput(){
    input.value = ""
}