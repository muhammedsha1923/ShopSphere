const express = require("express");

const app = express();

//middleware to read JSON request body    
app.use(express.json());

const productRoutes = require("./routes/productRoutes");


app.use("/api/products", productRoutes);


app.get("/", (req, res) => {
    res.send("Welcome to ShopSphere API");
});

module.exports = app;