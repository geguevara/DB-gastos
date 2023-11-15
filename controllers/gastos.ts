import { Request, Response } from "express";
import Gasto, {IGasto} from "../models/gasto";

export const crearGasto = async(req: Request, res: Response)=>{
    const gastoData:IGasto = req.body

    const{nombre, descripcion, valor}= gastoData

    if(!nombre || !descripcion || !valor){
        res.json({
             msj: "Faltan valores"
        })
        return
    }
    
    const gasto= new Gasto(gastoData)
    await gasto.save()

    res.json({
        msj:"cargado",
        gasto
    })
}
export const getGastos= async ({}, res:Response) =>{
    const condicion= {estado: true}

    const gastos: IGasto[]= await Gasto.find(condicion)
    res.json({
        gastos
    })
}
export const getGastosAnulados= async ({}, res:Response) =>{
    const condicion= {estado: false}

    const gastos: IGasto[]= await Gasto.find(condicion)
    res.json({
        gastos
    })
}

export const getGastosByValor = async (req:Request, res:Response)=>{
    const {valor} =req.params
    const gasto: IGasto | null = await Gasto.findOne({valor:valor})
    res.json({
        gasto
    })
}
