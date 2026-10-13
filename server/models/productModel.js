const db = require("../config/db");

const getAllProducts = (callback) => {

    const sql = "SELECT * FROM products";

    db.query(sql, (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });

};

const getProductById = (id, callback) => {
    const sql = "SELECT * FROM products WHERE id = ?";

    db.query(sql, [id], (error, results) => {

        if (error) {
            callback(error, null);
            return;

        }
        callback(null, results[0]);
    });
};


const createProduct = (product, callback) => {

    const sql = `
    INSERT INTO products
    (name, description, price, stock, category)
    VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
        product.name,
        product.description,
        product.price,
        product.stock,
        product.category
    ];


    db.query(sql, values, (error, result) => {

        if (error) {
            callback(error, null);
            return;
        }
        callback(null, result);

    });

};


const updateProduct = (id, product, callback) => {

    const sql = `
        UPDATE products
        SET name = ?, description = ?, price =?, stock = ?, category = ?
        where id = ?
    `;

    const values = [
        product.name,
        product.description,
        product.price,
        product.stock,
        product.category,
        id
    ];


    db.query(sql, values, (error, result) => {

        if (error) {
            callback(error, null);
            return;
        }

        callback(null, result);
    });

};

const deleteProduct = (id, callback) => {

    const sql = "DELETE FROM products WHERE id = ?";

    db.query(sql, [id], (error, result) => {

        if (error) {
            callback(error, null);
            return;
        }

        callback(null, result);
    });
};





module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};