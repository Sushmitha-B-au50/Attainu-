var select = document.getElementById("countries");
var convertToCountry = document.getElementById("convertToCountries");
var Amt = document.getElementById("amount");
var res = document.getElementById("result");
select.addEventListener('change', GetSelectedItem);
convertToCountry.addEventListener('change', GetSelectedItem);
Amt.addEventListener('change',calculate)



var rates ;
 function getCountriesCode()
{
fetch("https://api.freecurrencyapi.com/v1/latest?apikey=NviyfyJcOMwqHX0M42ZfbpV2bUgsungGiXvSafnR")
	.then(response => response.json())
	.then(result =>  
            {
               
                 var parsedData =Object.values(result);
                 console.log(Object.keys(parsedData));
                 var s = Object.values(parsedData);
                 var data = Object.keys(s[0]);
                 rates = Object.values(s[0]);
                for(i=0;i<data.length;i++)
                {
                var el = document.createElement("option");
                el.textContent = data[i];
                el.value = data[i];
                select.appendChild(el);
                }
            })
            .catch(error => console.log('error', error));
        }
 function getToCountriesCode()
{
    fetch("https://api.freecurrencyapi.com/v1/latest?apikey=NviyfyJcOMwqHX0M42ZfbpV2bUgsungGiXvSafnR")
    .then(response => response.json())

  .then(result =>  
    {
       
        var parsedData =Object.values(result);
        console.log(Object.keys(parsedData));
        var s = Object.values(parsedData);
       var data = Object.keys(s[0]);
        for(i=0;i<data.length;i++)
        {
        var el = document.createElement("option");
        el.textContent = data[i];
        el.value = data[i];
        convertToCountry.appendChild(el);
        }
    })
    .catch(error => console.log('error', error));
}
var toCountryName;
var fromCountryName;
var amtReceived;
function GetSelectedItem()
{
     toCountryName = convertToCountry.value;

     fromCountryName = select.value; 
}
function calculate()
{
    amtReceived = Amt.value;
    getResult();
}
   

async function getResult()
{

    fetch("https://api.freecurrencyapi.com/v1/latest?apikey=NviyfyJcOMwqHX0M42ZfbpV2bUgsungGiXvSafnR&currencies=" + toCountryName + "&base_currency=" + fromCountryName)
    .then(response => response.json())
    .then(result => {
        var parsedData =Object.values(result);
        console.log(Object.keys(parsedData));
        var s = Object.values(parsedData);
       var data = Object.values(s[0]);
       res.innerHTML = amtReceived * data;
    })
    .catch(error => console.log('error', error));
   
}
getCountriesCode();
getToCountriesCode();