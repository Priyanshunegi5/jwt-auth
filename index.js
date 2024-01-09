const express = require("express")

const jwt = require("jsonwebtoken")

const app = express();


app.get("/", (req, resp) => {


    resp.json({


        message: "a sample api"

    })

})
app.listen(5000, () => {

    console.log("server is running on 5000")

})