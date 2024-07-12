const productLogic = require("../logic/logic.sorting");

const getProducts = async (req, res, next) => {
    try {
        const { categoryname } = req.params;

        // Here in case if the user in not providing the value of N and price filter so I will be taking these default values
        const {n = 10, page = 1, minPrice = 0, maxPrice = 20000, sort, order } = req.query;

        //Calling the main Logic fuction for sorting and filtering functionality
        const products = await productLogic.getProducts(categoryname, parseInt(n), parseInt(page), parseFloat(minPrice), parseFloat(maxPrice), sort, order);

        return res,json(products);
    } catch (error) {
        next(error);
    }
};

const getProductDetails = async (req, res, next) => {
    try {
        const { categoryname, productid } = req.params;

        const product = await productLogic.getProductDetails(categoryname, productid);

        if(!product)
            return res.status(404).json({ message: "Product Not Found!!" });

        return res.json(product);
    } catch (error) {
        next(error);
    }
}