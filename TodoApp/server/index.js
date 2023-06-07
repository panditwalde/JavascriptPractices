const express = require('express');
const TodoRoute = require('./src/route/TodoRoute');
const app = express();
const PORT = 8000

//route
app.use("/", TodoRoute)

app.listen(PORT, () => {
    console.log("server running on " + PORT)
})