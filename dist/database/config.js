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
exports.conectarDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const conectarDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "mongodb+srv://geGuevara:aJfVYoiQ2QOeVHSZ@clusterge.fypaffg.mongodb.net/";
    try {
        yield mongoose_1.default.connect(url);
        console.log("Base de datos online");
    }
    catch (error) {
        console.error(error);
        throw new Error("Error en inicio de DB");
    }
});
exports.conectarDB = conectarDB;
