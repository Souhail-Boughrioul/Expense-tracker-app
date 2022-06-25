const name = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const addBtn = document.querySelector(".add-btn");
const noExpens = document.querySelector(".no-expenses-add");
const table = document.querySelector(".results");
let expens = 0;

addBtn.addEventListener("click",()=>{
    if(name.value!== "" && date.value !==""&&amount.value!==""){
        if(document.body.contains(noExpens)){
            noExpens.remove();
        }

        table.innerHTML += `
        <tr>
          <td>${name.value}</td>
          <td>${date.value}</td>
          <td>${amount.value +"$"}</td>
          <td>
          <input class="delete" type="button" value="Delete" onclick="removeRow(this)">
          </td>
        </tr>`
        name.value = "";
        date.value = "";
        amount.value = "";
       expens++;
    }else if(name.value== ""&&date.value== ""&&amount.value==""){
        alert("add your infos");
    }
    else if(name.value!== ""&&date.value!== ""&&amount.value==""){
        alert('add your amount');
    }else if(name.value== ""&&date.value!== ""&&amount.value!==""){
        alert('add the name');
    }else if(name.value!== ""&&date.value== ""&&amount.value!==""){
        alert('add the date');
    }
    else if(name.value!== ""&&date.value== ""&&amount.value==""){
        alert('add the amount and date');
    }
    else if(name.value== ""&&date.value!== ""&&amount.value==""){
        alert('add the name and amount');
    }
    else if(name.value== ""&&date.value== ""&&amount.value!==""){
        alert('add the date and name');
    }
})

function removeRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    expens--;
    if(expens=== 0){
        table.innerHTML += `
        <tr class="no-expenses-add">
          <td colspan="4">No expenses added yet!</td>
        </tr>`
    }
  }