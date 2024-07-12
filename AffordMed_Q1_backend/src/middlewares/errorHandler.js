// Creating an Error Handling fuction for better understanding of errors

const erroHandler =  (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
}

module.exports = erroHandler;