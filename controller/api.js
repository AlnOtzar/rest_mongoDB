import { cliente } from "../models/cliente.js";

const consulta=async(req,res,next)=>{
          
    try{
        const clientes=await cliente.find({})
        res.json(clientes)
    }catch(error){
        res.send(error)
        next()
    }
    
}

const consultaId = async (req,res,next) => {
    try{
        const clientes = await cliente.findById(req.params.id)
        if(!clientes){
            res.json({
                mensaje:"cleinte no existe"
            })
            next()
        }
        res.json(cliente)
    }catch(error){
        res.send(error)
    }
} 

const crear = async (req, res, next) => {
    const clienteNuevo = new cliente(req.body);
    try {
        await clienteNuevo.save();
        res.json({
            mensaje: "Se creó el cliente",
            cliente: clienteNuevo
        });
    } catch (error) {
        console.log(error);
        next();
    }
};



const encontrar = async (req, res, next) => {
    try {
        const clientes = await cliente.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next();
    }
};

const editar = async (req, res, next) => {
        const clienteEditado = await cliente.findByIdAndUpdate(
            req.params.id,
            req.body,     
            { new: true }
        );

        if (!clienteEditado) {
            return res.status(404).json({ 
                mensaje: "Cliente no encontrado" 
            });
        }

        res.json({
            mensaje: "Se editó el cliente",
            cliente: clienteEditado
        });
};

const borrar = async (req, res, next) => {
    const clienteBorrado = await cliente.findByIdAndDelete(req.params.id);

    if (!clienteBorrado) {
        return res.status(404).json({ mensaje: "Cliente no encontrado" });
    }

    res.json({
        mensaje: "Cliente borrado"
    });
};

export {
    crear,
    editar,
    borrar,
    encontrar,
    consulta,
    consultaId
};