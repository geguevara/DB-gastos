import { Router } from "express";
import { crearGasto, getGastos, getGastosAnulados,  getGastosByValor } from "../controllers/gastos";

const router= Router()

router.post("/", crearGasto)
router.get("/", getGastos)
router.get("/anulados", getGastosAnulados)
router.get("/:valor", getGastosByValor)



export default router