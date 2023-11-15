"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.post("/", users_1.crearUser);
router.get("/", users_1.getUsers);
router.get("/:id", users_1.getUserId);
router.put("/:id", users_1.updateUser);
router.get("/user-anulados", users_1.getUsersAnulados);
exports.default = router;
