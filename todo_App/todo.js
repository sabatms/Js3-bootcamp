const save_button = document.querySelector("#save-btn");
const title_input = document.querySelector("#title");
const list = document.querySelector(".list");

save_button.addEventListener("click", () =>{
          const val = title_input.value;

         if(val === ""){
            alert("you should a write a title");
         }else {
           const item = document.createElement("div");
           item.classList.add("item");
           item.textContent = val;

           const checkbox = document.creatElement("input");
           checkbox.setAttribute("type","checkbox");

           list.appendChild(item);

           title_input.value = "";        
          }
})