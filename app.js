const express = require("express")
let app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        message : "hello world",
        status : 200
    })

})

app.listen(3000, () => {
    console.log("server started!!")
})



