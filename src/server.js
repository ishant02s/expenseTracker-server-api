const http = require('http');
const app = require ("./app");



const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, console.log(`Server is up and running mate on the port PORT ${PORT}`));