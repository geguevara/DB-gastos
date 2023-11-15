"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GastoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
});
const Gasto = (0, mongoose_1.model)("Gasto", GastoSchema);
exports.default = Gasto;
