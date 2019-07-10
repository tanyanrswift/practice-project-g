const express = require('express');
const app = express();
const cors = require('cors');
const routeConfig = require('./src/config/routeConfig');

app.use(express.json());
app.use(cors());

routeConfig.init(app);

app.listen(8000, function() {
    console.log('Server running on port 8000');
})