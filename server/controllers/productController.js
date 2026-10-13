const productModel = require("../models/productModel");

const getProducts = (req, res) => {

    productModel.getAllProducts((error, products) => {
        if (error) {
            res.status(500).json({
                message: "Database error"
            });
            return;
        }

        res.json(products);

    });

};

const getProductById = (req, res) => {

    const id = req.params.id;

    productModel.getProductById(id, (error, product) => {

        if (error) {
            res.status(500).json({
                message: "Database error",
                id: id
            });
            return;
        }

        if (!product) {
            res.status(404).json({
                message: "Product not found"
            });
            return;
        }

        res.json(product);

    });

};

const createProduct = (req, res) => {
    const product = req.body;

    productModel.createProduct(product, (error, result) => {

        if (error) {
            res.status(500).json({
                message: "Database error"
            });
            return;
        }
        res.status(201).json({
            message: "Product created successfully",
            productId: result.insertId
        });


    });
};

const updateProduct = (req, res) => {

    const id = req.params.id;

    const product = req.body;

    productModel.updateProduct(id, product, (error, result) => {

        if (error) {
            res.status(500).json({
                massage: "Database error"
            });
            return;
        }

        if (result.affectedRows === 0) {

            res.status(404).json({
                message: "product not found"
            });
            return;
        }

        res.json({
            message: "Product updated successfully"
        });

    });
};

const deleteProduct = (req, res) => {

    const id = req.params.id;

    productModel.deleteProduct(id, (error, result) => {

        if (error) {
            res.status(500).json({
                message: "Database error"
            });
            return;
        }

        if (result.affectedRows === 0) {

            res.status(404).json({
                message: "Product not found"
            });

            return;
        }

        res.json({
            message: "Product deleted successfully"
        });

    });
};


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};

