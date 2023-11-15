"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGastosByValor = exports.getGastosAnulados = exports.getGastos = exports.crearGasto = void 0;
const gasto_1 = __importDefault(require("../models/gasto"));
const crearGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gastoData = req.body;
    const { nombre, descripcion, valor } = gastoData;
    if (!nombre || !descripcion || !valor) {
        res.json({
            msj: "Faltan valores"
        });
        return;
    }
    const gasto = new gasto_1.default(gastoData);
    yield gasto.save();
    res.json({
        msj: "cargado",
        gasto
    });
});
exports.crearGasto = crearGasto;
const getGastos = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condicion = { estado: true };
    const gastos = yield gasto_1.default.find(condicion);
    res.json({
        gastos
    });
});
exports.getGastos = getGastos;
const getGastosAnulados = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condicion = { estado: false };
    const gastos = yield gasto_1.default.find(condicion);
    res.json({
        gastos
    });
});
exports.getGastosAnulados = getGastosAnulados;
const getGastosByValor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { valor } = req.params;
    const gasto = yield gasto_1.default.findOne({ valor: valor });
    res.json({
        gasto
    });
});
exports.getGastosByValor = getGastosByValor;
