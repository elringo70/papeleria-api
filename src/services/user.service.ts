import { User } from "../models/userSchema";

class UserService {
  async getUsers(params: string, query: { page: number }) {
    const page: number = Number(query.page);
    const limit: number = 15;

    try {
      console.log(page * limit);

      return await User.find()
        .limit(limit)
        .skip(page * limit);
    } catch (error: unknown) {
      console.log(error);
    }
  }
}

export const userService = new UserService();
