const path = require('path');
const express = require('express');
const app = express();
const sttcpth = (path.join(__dirname,'../public'))

app.use(express.static(sttcpth))

app.listen(3000,()=>{
    console.log('server is up on port 3000')
})