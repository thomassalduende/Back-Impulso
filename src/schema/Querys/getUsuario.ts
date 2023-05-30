import { Request, Response } from "express";
import { Usuario } from "../../Entities/Usuario";

export const getUsuario = async(req: Request, res: Response) => {

    try {
        const usuario = await Usuario.find()
        return res.json(usuario)
    }catch (err: any) {
        return res.status(404).json({message: err.message})
    }
}