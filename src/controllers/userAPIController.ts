import { Request, Response } from "express";

export const userAPI = (req: Request, res: Response) => {
    res.status(200).send("here is the userAPI router");
};
