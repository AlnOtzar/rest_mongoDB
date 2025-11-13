import mongoose, { model } from "mongoose"
const Schema=mongoose.Schema;

mongoose.pluralize(null);
const clienteSchema=new Schema({
    nombre:{
        type:String,
        trim:true
    },
    empresa:{
        type:String,
        trim:true
    },
    correo:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true
    },
    telefono:{
        type:String,
        trim:true
    },
    
});

const cliente=mongoose.model("cliente",clienteSchema)

export{
    cliente
}
