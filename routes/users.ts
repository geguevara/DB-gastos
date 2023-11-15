import { Router } from "express";
import { crearUser, getUserId, getUsers, getUsersAnulados, updateUser } from "../controllers/users";

const router= Router()

router.post("/", crearUser)
router.get("/", getUsers)
router.get("/:id", getUserId)
router.put("/:id", updateUser)
router.get("/user-anulados", getUsersAnulados)


export default router