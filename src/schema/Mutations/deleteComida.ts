import { Request, Response } from "express";

import { Comidas } from "../../Entities/Camidas";

export const deleteComida = async(req: Request, res: Response) => {

    try {
        const {id} = req.params
        const comida = await Comidas.find({
            where: {
                id: parseInt(id)
            }
        })
    
        if(comida.length !== 0) {
    
            await comida[0].remove()
    
        }else {
            throw new Error('no existe la comida')
        }

        return res.json('comida eliminada')
    }catch (err: any) {
        
        return res.status(500).json({message: err.message})
    }

    
}