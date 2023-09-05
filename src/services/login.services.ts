import { compare } from "bcryptjs";
import { User } from "../entities";
import { AppError } from "../errors";
import { Login, Token } from "../interfaces";
import { userRepo } from "../repositories";
import { sign } from "jsonwebtoken";

const login = async ({ email, password }: Login): Promise<Token> => {
  const foundUser: User | null = await userRepo.findOneBy({ email });
  
  if (!foundUser) throw new AppError("Invalid credentials", 401);

  const samePass: boolean = await compare(password, foundUser.password);

  if (!samePass) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { admin: foundUser.admin },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export default { login };