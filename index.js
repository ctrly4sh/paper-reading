const express = require("express")
const app = express();

app.get('/' , (req,res) => {
	req.send("hey server starter at port")
});

app.listen(8001 , () => {console.log("Server started at port 8001")})

