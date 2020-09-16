const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("Welcome to my portal, my friend");
});

app.listen(3000, () => {
	console.log("Wazzapppp");
});