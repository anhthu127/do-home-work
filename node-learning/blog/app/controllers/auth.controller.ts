import { Role } from "../constants/constant";
import { AccountRegistration } from "../models/request";
import { getAccountByUsernameRepo } from "../repositories/auth.repository";
import {
  createAccountRepo,
  createParentRepo,
  createStudentRepo,
  getAccountByUserName,
} from "../repositories/school.repository";
import { Request, Response, NextFunction } from "express";
import { commonResponse } from "../utils/common-response";
import { STATUS } from "../constants/status";
import { Parents } from "../models/school";
export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  if (username && password) {
    const userExist = await getAccountByUsernameRepo(username);
    console.log(userExist);
  }
};

export const accountRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const account: AccountRegistration = req.body;
  try {
    const isExisted = await getAccountByUserName(
      account?.username,
      account?.email
    );
    if (isExisted.length > 0) {
      res.send(commonResponse(STATUS.EXISTED));
      return;
    }

    const accInsert = {
      name: account?.name,
      dob: account?.dob,
      username: account?.username,
      role: account?.role,
      email: account?.email,
    };

    const accCreated = await createAccountRepo(accInsert);
    console.log("accCreated dddd   ", accCreated);

    if (accCreated?.OkPacket && account?.role === Role.Parents) {
      const isExisted = await getAccountByUserName(
        account?.username,
        account?.email
      );
      console.log("isExistedssss   ", isExisted);

      const parent = {
        name: account?.name,
        dob: account?.dob,
        accountId: isExisted?.id,
      };

      const parentsCreated = await createParentRepo(parent);
      console.log("parentsCreated    ", parentsCreated);
    } else if (accCreated && account?.role === Role.Student) {
      const studentCreated = await createStudentRepo(account);
      console.log("studentCreated   ", studentCreated);
    }

    res.send();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
