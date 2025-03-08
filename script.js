const input = document.getElementById("input-field");
let operator = ["+", "-", "/", "*"]

const abc = (a)=>{
    let lastChar = input.value.slice(-1);
    // console.log(operator.indexOf(lastChar))
  if(a === "="){
    input.value = eval(input.value)
  }else if(operator.indexOf(lastChar) !== -1 && operator.indexOf(a) !== -1){
    input.value = input.value.slice(0, -1) + a ;
  }
  else if(a === "del"){
    input.value = ""
  }
  else{
    input.value += a;
  }
}
