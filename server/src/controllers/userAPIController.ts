import { Request, Response } from "express";

export const userAPI = (req: Request, res: Response) => {
    console.log("asdasdasdsd");
    res.status(200).send("here is the userAPI router");
};
