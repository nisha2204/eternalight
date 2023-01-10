const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
console.log(process.env.DB);
mongoose.connect(process.env.DB)
