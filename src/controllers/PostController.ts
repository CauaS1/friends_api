import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";
import { users } from "./UserController";


export const postPhoto = async (req: Request, res: Response) => {
  const { photo, description, userId } = req.body;

  const post = await getRepository(Post).save({
    photo, description, user: userId,
  });

  return res.json(post);
}

export const getPhotos = async (req: Request, res: Response) => {
  const posts = await getRepository(Post).find({
    relations: ['user']
  });

  return res.json(posts);
}