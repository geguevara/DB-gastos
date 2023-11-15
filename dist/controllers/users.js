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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSoftUser = exports.updateUser = exports.getUsersAnulados = exports.getUsers = exports.getUserId = exports.crearUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const gasto_1 = __importDefault(require("../models/gasto"));
const crearUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const { nombre, apellido, email, password, gasto } = userData;
    if (!nombre || !apellido || !email || !password) {
        res.json({
            msj: "Faltan datos necesarios"
        });
        return;
    }
    const gastoData = yield gasto_1.default.findOne({ nombre: gasto });
    if (!gastoData) {
        res.json({
            msj: "No se encontro el gasto, en la base de datos"
        });
        return;
    }
    const userInDB = yield user_1.default.findOne({ email: email });
    if (userInDB) {
        res.json({
            msj: "El usuario ya esta registrado"
        });
        return;
    }
    const user = new user_1.default({
        nombre,
        apellido,
        email,
        password,
        gasto: gastoData === null || gastoData === void 0 ? void 0 : gastoData._id
    });
    yield user.save();
    res.json({
        msj: "cargado",
        user
    });
});
exports.crearUser = crearUser;
const getUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield user_1.default.findById(id).populate("gasto");
    res.json({
        user
    });
});
exports.getUserId = getUserId;
const getUsers = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condicion = { estado: true };
    const users = yield user_1.default.find(condicion).populate("gasto");
    res.json({
        users
    });
});
exports.getUsers = getUsers;
const getUsersAnulados = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condicion = { estado: false };
    const users = yield user_1.default.find(condicion);
    res.json({
        users
    });
});
exports.getUsersAnulados = getUsersAnulados;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const _a = req.body, { estado, email } = _a, data = __rest(_a, ["estado", "email"]);
    const user = yield user_1.default.findByIdAndUpdate(id, data, { new: true });
    res.json({
        user
    });
});
exports.updateUser = updateUser;
const deleteSoftUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
});
exports.deleteSoftUser = deleteSoftUser;
