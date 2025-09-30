let a,b,c;
a= String(prompt("Enter your Name"));
b= Number(prompt("Enter your Age"));
c= String(prompt("Enter your City"));
if(b<18){
    alert("You are not eligible");
}else{
    alert("You are eligible");}
const d= new Date();  
let e=d.getHours();
if(e<12){
    alert("Good Morning ");
}else if(e<18){
    alert("Good Afternoon ");
}else{
    alert("Good Evening ");
}
let f=Number(prompt("Enter a 1st number"));
let g=Number(prompt("Enter a 2nd number"));
let h=prompt("Enter an operator (+,-,*,/)");
let result;
if(h=="+"){
    result=f+g;
}else if(h=="-"){
    result=f-g;
}else if(h=="*"){
    result=f*g;
}else if(h=="/"){
    result=f/g;
}else{
    alert("Invalid operator");
}
alert("The result is "+result);
const quotes ="Think big dream big";
alert (quotes); 
let info = {
    'Name': a
    , 'Age': b
    , 'City': c
};
console.log(JSON.stringify(info));