import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Message } from "../entity/Message";


export const sendMessage = async (req: Request, res: Response) => {
  const { sendToId } = req.params;
  const { text, userId } = req.body;

  const message = await getRepository(Message).save({
    sendTo: sendToId,
    text, userId
  });

  return res.json({ message });
}