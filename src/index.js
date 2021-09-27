const express = require('express');
const express_hbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
var morgan = require('morgan');
const route = require('./routes')
const db = require('./config/db')


db.connect()

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', express_hbs({
    extname: ".hbs"
}));
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'hbs');

// Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})