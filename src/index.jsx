const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3001;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP logger
// app.use(morgan('combined'));

// Template engine setup
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'main',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log('Views directory:', path.join(__dirname, 'resources/views'));

// Routes

// red chua thong tin ung dung gui len server
// red chua tt cua app yeu cau gui len server
// res de tuy chinh status code tra ve la gi respone header tra ve la gi status code

route(app);

                    // Error handling
                    app.use((err, req, res, next) => {
                        console.error(err.stack);
                        res.status(500).send('Something went wrong!');
                    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
