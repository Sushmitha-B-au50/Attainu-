
var filter, tr, td, th, i, txtValue;
const input = document.getElementById("input");
const Maintable =document.getElementById('tbl');
input.addEventListener('input',filterFnc)

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
    let promise =  fetch('https://jsonplaceholder.typicode.com/users/');
    let response = await promise;
    let data = await response.json();
    for(i=0;i<data.length;i++)
    {

        newRow+=`<tr>
        <th scope="row">${data[i].username}
        
         <td>${data[i].name}</td>
        </th>`;
        Maintable.innerHTML = newRow;
    }    
}
Load();

