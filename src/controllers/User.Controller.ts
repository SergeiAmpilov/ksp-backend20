import { UserDto } from "../dto/User.Dto";
import bcrypt from 'bcrypt';
import { userModel } from "../models/user";
import { NextFunction, Request, Response } from "express";
import { UserLoginDto } from "../dto/UserLogin.Dto";
import jwt from 'jsonwebtoken';

const { SALT = 10, JWT_SECRET = 'some-secret-key' } = process.env;

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

  };


  public async loginUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const user: UserLoginDto = req.body;

    // @ts-ignore
    const userFromDb = await userModel.findByEmail(user.email);
    const resLogin = await bcrypt.compare(user.password, userFromDb.password);

    if (resLogin) {
      const token = jwt.sign({ _id: userFromDb._id }, JWT_SECRET, { expiresIn: '7d' });

      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        // SameSite: true,
      })
      .send({ jwt: token });

    } else {
      res.status(401).send({message: 'wrong email or password'});
    }
    // 2. compare password
    // 3. generate jwt and send it
  }
}