// Question ID: 98

// Create a Temperature class.
// Make two methods :
// 1. convertFahrenheit - It will take celsius and will print it into Fahrenheit.
// 2. convertCelsius - It will take Fahrenheit and will convert it into Celsius.


class Temperature
{
    constructor(){
        
    }

    convertFahrenheit(celsiusval){
        celsiusval = parseFloat(celsiusval);
        console.log("Fahrenheit value is " + (celsiusval*1.8)+32);
        }

    convertCelsius(Fahrenheitval){
        Fahrenheitval = parseFloat(Fahrenheitval);
    console.log("Celsius value is "+(Fahrenheitval-32) / 1.8);
    }
}

let temp = new Temperature();
temp.convertFahrenheit(3);
temp.convertCelsius(40);