numb1 = Number(prompt("enter numb1: "));
numb2 = Number(prompt("enter numb1: "));

document.getElementById("num1-el").textContent = numb1;
document.getElementById("num2-el").textContent = numb2;

let sumEl = document.getElementById("sum-el")
function add(){
    sumEl.textContent = "sum is:" + parseInt(numb1 + numb2);
}
function sub(){
    sumEl.textContent = "sub is:" + (numb1 - numb2);
}
function divide(){
    sumEl.textContent = "Divide is is:" + (numb1 % numb2);
}
function mult(){
    sumEl.textContent = "Multiply is:" + (numb1 * numb2);
}