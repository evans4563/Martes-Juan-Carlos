const { connect } = require('http2');
const mongoose = require('mongoose');
const dbconnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://127.0.0.1:27017/users_pueba", {}, (err, res) => {
        if (!err){
            console.log("conexion exitossa")
        }
        else {
            console.log("Error de conexion")
        }
    })
}

module.exports = dbconnect;