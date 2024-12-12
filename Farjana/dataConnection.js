const mongoose = require('mongoose');
const dataConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://yesminmim1999:IDB-4321@cluster0.kd3h7nz.mongodb.net/ecommercedb?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log('Connected to Data-Base');} catch (error) {
        console.error(error);
    }
}
module.exports =dataConnection;