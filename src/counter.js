let counter = localStorage.getItem("clicked") ?(localStorage.getItem("clicked")): 0

if(localStorage.getItem("clicked")){

     counter = localStorage.getItem("clicked");
};

console.log(counter);

export function increase () {
          localStorage.setItem("clicked", counter);
          counter++

          console.log("increased.",counter);
};