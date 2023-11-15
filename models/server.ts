import express, { Express } from "express";
import { conectarDB } from "../database/config";
import gastoRoutes from "../routes/gastos";
import userRoutes from "../routes/users"

export class Server{
    app: Express;
    constructor(){
        this.app= express();
        this.conexionADB();
        this.middlewares();
        this.routes()
    }
    async conexionADB():Promise<void>{
        await conectarDB()
    }
    middlewares():void{
        this.app.use(express.json())
    }
    routes():void{
        this.app.use("/gastos", gastoRoutes)
        this.app.use("/users", userRoutes)
    }
    listen():void{
        this.app.listen(8080, ()=>{
            console.log("Corriendo en el puerto 8080");
        })
    }
}