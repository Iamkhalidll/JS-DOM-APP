let tableBody= document.querySelector('tbody');
let table= document.querySelector('table');
let checkBox = document.querySelector('#checkBox');
let myform = document.forms[0];
myform.addEventListener("submit",function (e) {
e.preventDefault();
(function giveClass() {
    table.classList.add("show-table")
})();


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
if(checkBox.checked) {
  let  yes = tableContent_4.textContent="Yes";
} else {
   let No= tableContent_4.textContent= "No"
}
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
deleteButton.onclick = (e) => {
    let parent =tRow.parentElement;
    parent.removeChild(tRow)
}
//Edit button
editButton.onclick = (i=1)=>{
    inputs[0].value= value1;
    inputs[1].value= value2;
    inputs[2].value= value3;
    document.querySelector('select').value =value4
    document.querySelector("button").textContent="Update";
    let button = document.querySelector('button');
    myform.addEventListener("submit",e=>{
         e.preventDefault();
          if( document.querySelector("button").textContent=="Update"){ 
            tableBody.removeChild(tRow);
          tableContent_1.innerHTML = inputs[0].value + " " + inputs[1];
          tableContent_2.innerHTML = inputs[2].value ;
          tableContent_3.innerHTML = document.querySelector('select').value ;
          if(checkBox.checked) {
              tableContent_4.innerHTML="Yes";
          } else {
              tableContent_4.innerHTML= "No"
          }}
          document.querySelector("button").textContent="Submit";
         
    })
    }




})