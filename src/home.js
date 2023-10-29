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

// setTimeout(()=>{
//           inp.value = name;
//           btn.textContent ="send";
// },2000);


// setInterval(() =>{
//   btn.classList.toggle("success");
// },1000);

btn.addEventListener("click", () => {
          console.log("clicked!")
});

inp.addEventListener("keydown", ()=>{
          if(inp.value === ""){
          console.log("empty");
          btn.classList.remove("success");
          }else{
          console.log("ok");
          btn.classList.add("success");
          }
})
//console.log({ btn });
//console.log(btn.textContent);

console.log(inp.value);