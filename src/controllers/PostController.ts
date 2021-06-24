import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";


export const postPhoto = async (req: Request, res: Response) => {
  const { photo, description } = req.body;

  const post = await getRepository(Post).save({
    photo, description
  });

  return res.json(post);
}