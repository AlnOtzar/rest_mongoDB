import express from "express"
import { crear, editar, borrar, encontrar, consulta, consultaId} from "../controller/api.js";

const router=express.Router();

router.post("/crear",crear)

// router.get("/encontrar/:id",encontrar)

router.get("/consulta", consulta)
router.get("/consulta/:id", consultaId)


router.put("/editar/:id",editar)
// con mike es actualizar

router.delete("/borrar/:id", borrar)
// en mike es eliminar

export default router