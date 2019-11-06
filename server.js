const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
//Load env
dotenv.config({path:'./config.env'});

const app = express();


//Profile routes
app.use('/api/v1/profile',require('./routes/profile'))
const port = process.env.PORT || 8000;

//Dev logging 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.listen(port,()=>{
    console.log(`Server is running in ${process.env.NODE_ENV } mode on port ${port}`);
})