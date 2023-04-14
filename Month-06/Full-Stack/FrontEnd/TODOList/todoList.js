
var filter, tr, td, th, i, txtValue,item, array=[];
const createTsk = document.getElementById("BtncreateTask");

const deleteAll = document.getElementById("BtnDeleteAll");
const Maintable =document.getElementById('tbl');
const input = document.getElementById("input");
createTsk.addEventListener('click',AddItem);
deleteAll.addEventListener('click',DeleteAll);


function AddItem() {
    item = input.value.toUpperCase();
    array.push(item);
    Load();
  }

  function DeleteAll() {
    Maintable.innerHTML = "";
    array = [];
  }

  function DeleteTsk(item)
  {

for(i=0;i<array.length;i++)
{
   array.pop();
}
//     var indexes = Maintable.control.getSelectedRowOrdinals();
//    console.log(indexes);
//         var rowCount = Maintable.rows.length;  
//         for (var i = 0; i < rowCount; i++) {  
//             var row = Maintable.rows[i];  
//             // var rowObj = row.cells[0].childNodes[0];  
//             if (row == rowToDelete) {  
//                 Maintable.deleteRow(i);  
//                 rowCount--;  
//             }  
//         } 

}


function filterFnc() {
    filter = input.value.toUpperCase();
    tr = Maintable.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      th = tr[i].getElementsByTagName("th")[0];
      td = tr[i].getElementsByTagName("td")[0];
      if (td || th) {
        txtValue = td.textContent || td.innerText;
        txtValue  += th.textContent || th.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
async function Load()
{
     var newRow = "";
    for(i=0;i<array.length;i++)
    {
        newRow+=`<tr>
        <th scope="row">${array[i]} 
         
         <button type="button" class="btn btn-primary m-5"><i class="fas fa-edit bt-large"></i> Complete the Item</button> `+
        `<button type="button" class="btn btn-success m-3" id=btnDelete><i class="far fa-trash-alt">  </i> Delete</button>` +
        `</th> 
        <tr>`;
        Maintable.innerHTML = newRow;
        const deleteTsk = document.getElementById("btnDelete");
        deleteTsk.addEventListener('click',DeleteTsk(newRow));
}  
}
 Load();

