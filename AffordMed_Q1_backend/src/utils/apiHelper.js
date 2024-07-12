const axios = require('axios');

const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
    for(let i=0; i<retries; i++) {
        try {
            return await axios.get(url);
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

module.exports = fetchWithRetry;