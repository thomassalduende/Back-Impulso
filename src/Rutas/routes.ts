import { Router } from "express";
import { insertComidas } from "../schema/Mutations/insertComida";
import { updateComida } from "../schema/Mutations/updateComida";
import { deleteComida } from "../schema/Mutations/deleteComida";

import { getComidas } from "../schema/Querys/getComidas";
import { getComidasID } from "../schema/Querys/getComidaID";

const router = Router();


router.get('/comidas', getComidas)
router.get('/comida/:id', getComidasID)

router.post('/add', insertComidas)
router.put('/edit/:id', updateComida)
router.delete('/delete/:id', deleteComida)

export default router;