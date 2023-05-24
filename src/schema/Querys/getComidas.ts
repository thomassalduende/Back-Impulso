import { Request, Response } from "express";
import { Comidas } from "../../Entities/Camidas";


export const getComidas = async(req: Request, res: Response) => {

    try {
      const comidas = await Comidas.find();

        return res.json(comidas);
      }catch (error: any) {
        
        return res.status(500).json({ message: error.message });
      }
}