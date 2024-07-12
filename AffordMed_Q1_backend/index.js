const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();
app.use(express.json());

const corsOptions = {
    origin: `https://localhost:${process.env.PORT}`,
    methods: "GET, POST, PUT, DELETE, PATCH",
    credentials: true
}
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("Welcome to ApniDukaan!!")
})

app.use("/categories", productRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on PORT: ${process.env.PORT}`)
})