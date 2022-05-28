document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
      const input = document.querySelector("#input");
      addItem(input.value);
    }
      
  });
  
  document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input").value;

x={
    "task":input,
    "status":"false"
}
    fetch('http://localhost:3000/tasks',{
      method: "POST",
                body: JSON.stringify(x),
                headers: {
                    'Content-Type': "application/json"
                }
    })
    alert("added")
    getlist()
  });
  
  addItem = (input,id) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const text = document.createElement("p");
  
    item.className = "item";
    text.textContent = input;
  
    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", () => {
      checkIcon.style.color = "limegreen";
    })
    div.appendChild(checkIcon);
  
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", () => {
         var sai=fetch(`http://localhost:3000/tasks/${id}`,{
            method: "DELETE",
                      
                      headers: {
                          'Content-Type': "application/json"
                      }
          })

getlist()
    })
    div.appendChild(trashIcon);
  
    item.appendChild(text);
    item.appendChild(div);
  
    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";
  }




  function getlist(){
    var data = fetch("http://localhost:3000/tasks")
    .then((x)=>x.json())
    .then((x)=>{

x.forEach(element => {
    addItem(element.task,element.id)
    
});


    })
}
 getlist()