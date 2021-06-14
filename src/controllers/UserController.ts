import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const users = async (req: Request, res: Response) => {
  const users = await getRepository(User).find();
  return res.json({ users });
}

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await getRepository(User).save({
    name, email, password
  });

  return res.json({ user });
}