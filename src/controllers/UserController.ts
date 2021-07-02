import { Request, Response, NextFunction, request } from "express";
import { Equal, getRepository } from "typeorm";
import { User } from "../entity/User";

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export const users = async (req: Request, res: Response) => {
  const users = await getRepository(User).find();
  return res.json({ users });
}

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await getRepository(User).findOne({
      where: { id: id }
    })

    return res.json({ user });

  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
}

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const salt = 10;

  const getUser = await getRepository(User).findOne({
    where: { email: email }
  });

  if (!getUser) {
    bcrypt.hash(password, salt, async (err, hash) => {
      const user = await getRepository(User).save({
        name, email, password: hash
      });
      return res.json({ user });
    })
  } else {
    return res.status(404).json({ msg: 'Already exist an account with email!' });
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  await getRepository(User).findOne({
    where: { email: Equal(email) }
  }).then(data => { // if email exist, check the password
    const hash = bcrypt.compareSync(password, data.password);
    if (hash) {
      const id = data.id;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 60 * 60
      });

      return res.json({ msg: 'Everything oks', token: token, user: data });
    } else {
      return res.status(404).json({ msg: 'Error! the password is wrong!' });
    }
  }).catch(err => { // if email doesn't exist, send an error
    return res.status(404).json({ msg: 'Error! The email doesn\'t exist' });
  })
}

export const editUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, photo, about, age, instagram, whatsapp } = req.body;

  try {
    const user = await getRepository(User).findOne({
      where: { id: id }
    });

    user.name = name;
    user.photo = photo;
    user.about = about;
    user.age = age;
    user.instagram = instagram;
    user.whatsapp = whatsapp;

    const updated_user = await getRepository(User).save(user);

    return res.json(updated_user);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
}