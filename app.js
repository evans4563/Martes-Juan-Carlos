const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./userModel');
const app = express();

const router = express.Router();


//crear un dato
router.post("/",async (req,res) =>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

//obtener todos los datos
router.get("/", async(req, res) =>{
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
})

//obtener un dato especifico
router.get("/:id", async(req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta);
})

//actualizar
router.put("/:id", async(req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id: id}, body) //busca el id y si coincide, lo reemplaza con lo que hay con el body
    res.send(respuesta);
})

//eliminar
router.delete("/:id", async(req, res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id: id}) //verifica que sea el mismo id que se está pasando
    res.send(respuesta);
})

app.use(express.json())
app.use(router)
app.listen(3001, () => {
    console.log("el servidor esta en el puerto 3001")
})

dbconnect();