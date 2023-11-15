import { Model, Schema, model, ObjectId} from "mongoose";

export interface IUser{
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    estado: boolean;
    gasto:ObjectId;
}
const UserSchema= new Schema<IUser>({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    estado:{
        type: Boolean,
        default: true,
        //required: true
    },
    gasto:{
        type: Schema.Types.ObjectId,
        ref: "Gasto",
        required: true
    }
})
const User: Model<IUser>= model<IUser>(
    "User", UserSchema
)

export default User