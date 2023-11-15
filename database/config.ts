import mongoose from "mongoose";

export const conectarDB = async():Promise<void> =>{
    const url= "mongodb+srv://geGuevara:aJfVYoiQ2QOeVHSZ@clusterge.fypaffg.mongodb.net/"
    try {
        await mongoose.connect(url)
        console.log("Base de datos online");
        
    } catch (error) {
        console.error(error);
        throw new Error("Error en inicio de DB")
        
    }
}