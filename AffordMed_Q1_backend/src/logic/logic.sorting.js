const axios = require("axios");
const config = require("../config");

const productLogic = async (
  category,
  n,
  page,
  minPrice,
  maxPrice,
  sort,
  order
) => {
  const products = [];

  for (const company of config.COMPANIES) {
    //Creating the url for fetching the details by taking the given example in the pdf as context
    const url = `${config.BASE_URL}/${company}/categories/${category}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    const response = await axios.get(url);
    products.push(...response.data);
  }

  //Now writing the sorting Logic on the basis on Price
  if (sort) {
    products.sort((a, b) => {
      if (order === "desc") {
        return b[sort] - a[sort];
      }
      return a[sort] - b[sort];
    });
  }

  //Now implementing the Pagination Login
  const startIdx = (page - 1) * n;
  const paginatedProducts = products.slice(startIdx, startIdx + n);

  //Assigning the Ids to each products as per the pagination
  paginatedProducts.forEach((product, i) => {
    product.id = `${category}-${startIdx + i + 1}`;
  });

  return paginatedProducts;
};

const getProductDetails = async (category, productId) => {
  for (const company of config.COMPANIES) {
    try {
      const url = `${config.BASE_URL}/${company}/categories/${category}/products/${productId}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      if (error.responses && error.responses.status !== 404) {
        throw error;
      }
    }
  }

  return null;
};

module.exports = {
  productLogic,
  getProductDetails,
};