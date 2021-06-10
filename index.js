const createServer = require("./server")
    
const app = createServer() 
app.listen(process.env.PORT || 8082, () => console.log('Running on port 8082'));

module.exports = app