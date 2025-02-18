let container = document.querySelector(".container");
let addBtn = document.querySelector(".add");

const myList = []

addBtn.addEventListener("click", allocation);


function render(){
    container.innerHTML="" ;
    for (let i =0 ; i < myList.length ; i++){
        let list = document.createElement("p");
        let button = document.createElement("input");
        button.type = "checkbox"
        button.classList.add("btn");
        button.setAttribute("id",i);
        button.addEventListener("click",del);
        list.classList.add("list");
        list.innerText = myList[i]
        list.appendChild(button);
        container.appendChild(list);
    }
} 
function allocation(){
    let textField = document.querySelector(".textfield");
    if (textField.value != ""){
        myList.push(textField.value);
        textField.value = "";
    }
    console.log(myList);
    render(); 
}
function del(){
    let buttonId = this.getAttribute("id");
    myList.splice(buttonId,1);
    render();
}