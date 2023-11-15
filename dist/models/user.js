"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true,
        //required: true
    },
    gasto: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Gasto",
        required: true
    }
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
