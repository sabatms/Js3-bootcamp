//console.log('Hello world!');
//console.log("i'm from LDN");

/*import { increase } from "./counter";
console.log("salam")
document.querySelector("button").addEventListener("click",increase);

*/


//const btn = document.querySelector("button");
const name ="sina";
const btn = document.querySelector("#saba");
const inp = document.querySelector("input[name = firstname]");
const password_input = document.querySelector("input[name=pw]");
const description_element= document.querySelector(".description");

const my_p =document.createElement("p");
my_p.classList.add("succses");
my_p.textContent = "salam in yek matn ast"

description_element.appendChild(my_p)
console.log(my_p);

const my_p1 =document.createElement("p");
my_p1.textContent = "saba tahmasebi"

description_element.appendChild(my_p1)
console.log(my_p1);

// password_input.setAttribute("type","password");
// password_input.setAttribute("value","saba");
// //password_input.setAttribute("class","sucsses salam");
// password_input.classList.add("success","hello");

// console.log({
//  password_input,
// });

// setTimeout(()=>{
//           inp.value = name;
//           btn.textContent ="send";
// },2000);


// setInterval(() =>{
//   btn.classList.toggle("success");
// },1000);

// btn.addEventListener("click", () => {
//           console.log("clicked!")
// });

// inp.addEventListener("keydown", ()=>{
//           if(inp.value === ""){
//           console.log("empty");
//           btn.classList.remove("success");
//           }else{
//           console.log("ok");
//           btn.classList.add("success");
//           }
// })
// console.log({ btn });
// console.log(btn.textContent);

// console.log(inp.value);