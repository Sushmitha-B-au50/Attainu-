
const arrayNumber  = document.getElementById('Number');
const pushOperation = document.getElementById('push');
const popOperation = document.getElementById('pop');
const result = document.getElementById('stack');
const validation= document.getElementById('invalid');
pushOperation.addEventListener('click',stackPushOperation);
popOperation.addEventListener('click',stackPopOperation);

let arr = [];
function stackPushOperation()
{
    let  num = arrayNumber.value;
    if(num !="")
    {
    arr.push(num);
    result.innerHTML = arr;
    arrayNumber.value="";
    validation.style.display = 'none';
    validation.style.position = 'absolute';
    }
    else
      {
        validation.style.display = 'inline';
        validation.style.position = 'static';
      }
}

function stackPopOperation()
{
    if(arr.length ===0)
    {
        result.innerHTML = "stack is empty";
    }
    else{
        arr.pop();
        result.innerHTML = arr;
        arrayNumber.value="";
    }
}


