import { Request, Response } from "express";
import { Comidas } from "../../Entities/Camidas";

export const insertComidas = async (req: Request, res: Response) => {

    try {
        const { nombre, precio, descripcion, images } = req.body

        const comida = new Comidas()

        comida.nombre = nombre;
        comida.descripcion = descripcion;
        comida.precio = precio;
        comida.images = images;

        await comida.save();

        return res.json(comida)
   }catch(err: any) {
        return res.status(500).json({message: err.message})
   }
}