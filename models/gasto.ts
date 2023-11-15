import { Model, Schema, model } from "mongoose";

export interface IGasto{
    nombre: string;
    descripcion: string;
    valor: number;
    estado: boolean;
}
const GastoSchema= new Schema<IGasto>({
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    valor:{
        type: Number,
        required: true
    },
    estado:{
        type: Boolean,
        default: true,
        //required: true
    }
})
const Gasto: Model<IGasto>= model<IGasto>(
    "Gasto", GastoSchema
)

export default Gasto