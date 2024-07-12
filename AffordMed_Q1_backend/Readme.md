#Facing this error unable to resolve even after generating new access token

AxiosError: Request failed with status code 401
    at settle (C:\Users\yatha\OneDrive\Desktop\2115001168\AffordMed_Q1_backend\node_modules\axios\dist\node\axios.cjs:1983:12)
    at IncomingMessage.handleStreamEnd (C:\Users\yatha\OneDrive\Desktop\2115001168\AffordMed_Q1_backend\node_modules\axios\dist\node\axios.cjs:3085:11)
    at IncomingMessage.emit (node:events:531:35)
    at endReadableNT (node:internal/streams/readable:1696:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
    at Axios.request (C:\Users\yatha\OneDrive\Desktop\2115001168\AffordMed_Q1_backend\node_modules\axios\dist\node\axios.cjs:4224:41)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.productLogic (C:\Users\yatha\OneDrive\Desktop\2115001168\AffordMed_Q1_backend\src\logic\logic.sorting.js:18:22)
    at async getProducts (C:\Users\yatha\OneDrive\Desktop\2115001168\AffordMed_Q1_backend\src\controllers\product.controller.js:11:26)
