/*function counter(){
     let current  = 0; 

     function increase() {
      current+=1;
      return current
     }

     return increase;
          
}

const my_counter =counter();
my_counter()
my_counter()
my_counter()
my_counter()

console.log(my_counter());

*/

function makeAdder(x){
let final = x

          function adder(y){
            final = final + y  
            return x+y;

          }

          return adder;
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);


console.log(add5(3));
console.log (add5(4));
console.log(add10(3));