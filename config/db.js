const mongoose = require('mongoose')
const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            

        });
        console.log(`MongoDB Connected `);
    } catch (e) {
            console.error(`Error: ${e.message}`);
            process.exit();
    }}
    module.exports = connectDB;