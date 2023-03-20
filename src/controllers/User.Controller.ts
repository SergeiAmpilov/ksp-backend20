import { UserDto } from "../dto/User.Dto";
import bcrypt from 'bcrypt';
import { userModel } from "../models/user";
import { NextFunction, Request, Response } from "express";

const { SALT = 10 } = process.env;

export class UserController {
  public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {

    const user: UserDto = req.body;

    const passwordHash = await bcrypt.hash(user.password, SALT);
    const newUser = await userModel.create({
      ...user,
      password: passwordHash
    });

    console.log('new user created', newUser);
    res.status(201).send({ user: {
      email: newUser.email
    } });

  }
}