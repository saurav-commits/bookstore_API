const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bookStoreRoutes = require('./routes/bookStoreRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoute');
const cookieParser = require('cookie-parser');


const app = express();

app.use(express.json());
app.use(cookieParser());

// connecting to database

mongoose.connect(config.dbUrl, {useNewUrlParser:true, useUnifiedTopology: true})
.then(() => console.log('connected to database'))
.catch((err) => console.error(err));

// routes 
app.use('/bookstore', bookStoreRoutes);
app.use('/order', orderRoutes);
app.use('/user', userRoutes);
app.use('/cart', cartRoutes);


// error handlers
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({message: 'WTF not working'});
});

// start server
app.listen(config.port, ()=> console.log(`Server started on port ${config.port}`));

