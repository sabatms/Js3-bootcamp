let counter: number= 0;

while(counter < 10 ){
      console.log("Current value:", counter);
      counter++
}
console.log (counter);
//
for(let counter = 7; counter < 17; counter++){
          console.log("Current value:", counter);
}

for(let counter: number = 10; counter > 0; counter--){
          console.log("Current value:", counter);
}

let output : string = "";
let output2 :string = ""
for( let counter: number = 0; counter <10; counter++){
          output += "*";
for(let counter: number = 0; counter <10; counter++){
          output+="S"
}

output +="*\n"
}
console.log(output);
console.log(output2);
//
let bomb :number = 60;
while (bomb > 0){
          bomb--;
console.log("Remaining time: =",bomb);
}
console.log("Fire!");