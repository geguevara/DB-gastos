import User, { IUser } from "../models/user"
import { Request, Response } from "express";
import Gasto from "../models/gasto";

export const crearUser = async(req: Request, res: Response)=>{
    const userData:IUser = req.body

    const {nombre, apellido, email, password, gasto}= userData

    if(!nombre || !apellido || !email || !password){
        res.json({
            msj: "Faltan datos necesarios"
        })
        return
    }

    const gastoData= await Gasto.findOne({nombre:gasto})
    if(!gastoData){
        res.json({
            msj:"No se encontro el gasto, en la base de datos"
        })
        return
    }
    const userInDB= await User.findOne({email:email})

    if(userInDB){
        res.json({
            msj: "El usuario ya esta registrado"
        })
        return
    }
    const user= new User({
        nombre,
        apellido,
        email,
        password,
        gasto: gastoData?._id
    })


    await user.save()

    res.json({
        msj:"cargado",
        user
    })
}




export const getUserId= async(req:Request, res:Response)=>{
    const id =req.params.id
    
    const user: IUser | null = await User.findById(id).populate("gasto")
    res.json({
        user
    })
}
export const getUsers= async ({}, res:Response) =>{
    const condicion= {estado: true}
    const users: IUser[]= await User.find(condicion).populate("gasto")
    res.json({
        users
    })
}

export const getUsersAnulados= async ({}, res:Response) =>{
     const condicion= {estado: false}

    const users: IUser[]= await User.find(condicion)
    res.json({
        users
    })
}
export const updateUser= async (req:Request, res:Response) =>{
    const id= req.params.id

    const {estado, email, ...data} = req.body

    const user= await User.findByIdAndUpdate (id, data, {new:true})
    res.json({
        user
    })
}
export const deleteSoftUser= async(req:Request, res:Response)=>{
    const id= req.params.id

//continuar con esto
}
