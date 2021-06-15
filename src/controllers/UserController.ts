import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const users = async (req: Request, res: Response) => {
  const users = await getRepository(User).find();
  return res.json({ users });
}

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getRepository(User).findOne({
    where: { id: id }
  });

  return res.json({ user });
}

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await getRepository(User).save({
    name, email, password
  });

  return res.json({ user });
}

export const editUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { photo, about, age } = req.body;

  const user = await getRepository(User).findOne({
    where: { id: id }
  });

  user.about = about;
  user.age = age;
  user.photo = photo;

  const update_user = await getRepository(User).save(user);

  return res.json({ update_user });
}