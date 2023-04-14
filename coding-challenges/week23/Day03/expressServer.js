const express = require('express')
const app = express()

app.listen(5000, () => {
    console.log("server is live on port 5000");
})

let Counter = [
   { count:0 }
]

app.get('/', (req,res) =>
{
    let result = Counter[0];
    result.count +=1;
    res.send("Number of times this website visited was - " +  result.count);
})

app.get('/reset', (req,res) =>
{
    let result = Counter[0];
    result.count = 0;
    res.send("Reset done now the counter for that is route "  +  result.count);
   return;
})