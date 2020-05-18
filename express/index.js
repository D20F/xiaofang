const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 8085;
const hostname = 'localhost';

app.use(express.static(path.resolve(__dirname, './dist')))
 
app.get('/', (req, res) => {
	const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');
	res.send(html)
})

app.listen(port, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
});




setInterval(() => {
   console.log(Math.random())
}, 1000);