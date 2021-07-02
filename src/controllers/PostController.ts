import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";


export const postPhoto = async (req: Request, res: Response) => {
  const { photo, description, userId } = req.body;

  try {
    if (photo !== '' && description !== '') {
      const post = await getRepository(Post).save({
        photo, description, user: userId,
      });

      return res.json(post);
    } else {
      return res.status(400).json({ msg: 'You need to add a photo and a description' });
    }
  } catch (err) {
    return res.status(404).json({ error: err });
  }
}

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await getRepository(Post).find({
      relations: ['user']
    });

    return res.json(posts);
  } catch (err) {
    return res.status(404).json({ error: err });
  }
}

export const getUserPosts = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await getRepository(Post).find({
      where: { user: id }
    });

    return res.json(post);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
}
