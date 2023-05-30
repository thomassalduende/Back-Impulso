import { Router } from "express";
import { getUsuario } from "../schema/Querys/getUsuario";

const routerUser = Router()

routerUser.get('/usuarios', getUsuario)

export default routerUser;