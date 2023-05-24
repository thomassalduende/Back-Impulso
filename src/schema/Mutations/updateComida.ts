import { Request, Response } from "express";

import { Comidas } from "../../Entities/Camidas";

export const updateComida = async(req: Request, res: Response) => {

    try {
        const { id }= req.params;
        const {nombre, precio, descripcion, images} = req.body;

        const comida = await Comidas.find({
            where: {
                id: parseInt(id)
            }
        })
    
        if(comida.length !== 0) {
            comida[0].nombre = nombre;
            comida[0].precio = precio;
            comida[0].descripcion = descripcion;
            comida[0].images = images;
    
            await comida[0].save()
        }else {
            return res.status(500).json({message: 'no existe la comida'})
        }
        return res.json(comida)
    }catch(err: any) {
        return res.status(500).json({message: err.message})
    }
}