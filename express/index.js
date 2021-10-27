let express = require('express');

let app=express();

app.get("/",(httpRequest,httpResponse) => {
	httpResponse.send("test")
	})

let port = 5000
app.listen(port,() => console.log(`localhost:${port}`))
