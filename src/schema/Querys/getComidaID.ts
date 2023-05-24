import { Request, Response } from "express";
import { Comidas } from "../../Entities/Camidas";


export const getComidasID = async(req: Request, res: Response) => {

    try {
      const { id } = req.params
        const comidas = await Comidas.find({
            where: {
                id: parseInt(id)
            }
        });
        return res.json(comidas);

      }catch (error: any) {
        
        return res.status(500).json({ message: error.message });
      }
}