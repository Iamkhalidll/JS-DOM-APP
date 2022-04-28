let tableBody= document.querySelector('tbody');
let table= document.querySelector('table');
let checkBox = document.querySelector('#checkBox');
let myform = document.forms[0];
let verifyCreate = "yes"
let button = document.querySelector('button');
myform.addEventListener("submit", (e)=> {
e.preventDefault();
(function giveClass() {
    table.classList.add("show-table")
})();

function create() {
    //creating constants
let inputs = myform.querySelectorAll("input");
let value1 = inputs[0].value;
let value2 = inputs[1].value;
let value3 = inputs[2].value;
let value4 = myform.querySelector("select").value;

//creating elements
let tRow = document.createElement("tr");
let tableContent_1 = document.createElement('td');
let tableContent_2 = document.createElement('td');
let tableContent_3 = document.createElement('td');
let tableContent_4 = document.createElement('td');
let tableContent_5 = document.createElement('td');
let tableContent_6 = document.createElement("td");
let deleteButton = document.createElement("button");
let editButton = document.createElement("button")

//Giving Values
deleteButton.textContent = "Delete";
editButton.textContent = "Edit";
tableContent_1.textContent = value1 + " " + value2;
tableContent_2.textContent = value3;
tableContent_3.textContent = value4;
function verify(){
     if(checkBox.checked) {
  return "Yes"
} else {
    return "No"
}
}
let answer = verify();
tableContent_4.textContent = answer

//Appending children
tableContent_5.appendChild(deleteButton);
tableContent_6.appendChild(editButton);
editButton.classList.add('edit',"tableButton");
deleteButton.classList.add('delete',"tableButton");
tableBody.appendChild(tRow);
let content = [tableContent_1,tableContent_2,tableContent_3,tableContent_4,tableContent_5,tableContent_6];
for(i=0;i<6;i++){
   tRow.appendChild(content[i]);
}
/***********UTILITES**************/
for(i=0;i<3;i++){
    inputs[i].value = "";
}
if(value4 !=""){
    document.querySelector("select").value= "";
}
   

//Delete button 
deleteButton.onclick = () => {
    let parent =tRow.parentElement;
    parent.removeChild(tRow)
}
 //Edit button
editButton.onclick =(e)=>{
    let parent = editButton.parentElement.parentElement
    parent.classList.add('selected')
    let selectedRow = document.querySelector(".selected")
    let tds = selectedRow.querySelectorAll('td');
    let names = tds[0].textContent.split(" ")
    inputs[0].value= names[0];
    inputs[1].value= names[1];
    inputs[2].value= tds[1].textContent;
    document.querySelector('select').value = tds[2].textContent
    document.querySelector("button").textContent="Update";
    if (tds[3].textContent =="yes"){
        checkBox.checked
    }else{
        checkBox.value = null
    }
    verifyCreate = "no"
    console.log(parent)
     myform.addEventListener("submit",e=>{
         e.preventDefault();
         if(parent.classList.contains("selected")){
         tds[0].innerHTML =  inputs[0].value +" "+ inputs[1].value    
         tds[1].innerHTML =inputs[2].value
         tds[2].innerHTML =document.querySelector('select').value
     
             
               let answer = verify();
               tds[3].innerHTML = answer 
             parent.classList.remove('selected')
             document.querySelector("button").textContent="Submit";
            
             inputs[0].value= "";
             inputs[1].value= "";
             inputs[2].value= ""
             document.querySelector('select').value = ""
             checkBox.value = null;
             verifyCreate = "yes"
         }
           
                   
     }
   )}
    
 }
 
  //verifying whether to create or not
    if(verifyCreate == "yes"){create()}


})


