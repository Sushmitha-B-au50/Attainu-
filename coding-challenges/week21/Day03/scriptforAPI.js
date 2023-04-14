const displayJoke =document.getElementById('joke');
const joke = document.getElementById('btnGetJoke');
joke.addEventListener('click',getjoke);


async function getjoke()
{
    let promise =  fetch('https://icanhazdadjoke.com/slack');
    let response = await promise;
    let data = await response.json();
    displayJoke.innerText = data.attachments[0].text;
}


