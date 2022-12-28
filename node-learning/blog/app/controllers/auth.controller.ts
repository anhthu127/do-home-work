import { getAccountByUsernameRepo } from "../repositories/auth.repository";

export const loginController = async (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    const userExist = await getAccountByUsernameRepo(username);
    console.log(userExist);
  }
};
