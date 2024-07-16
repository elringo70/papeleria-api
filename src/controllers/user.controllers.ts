import { Customer } from "../models/userSchema";
import { dbConnect, dbDisconnect } from "../utils/db";

class UserControllers {
  async create() {
    try {
      await dbConnect();

      const body = {};

      const customer = new Customer(body);

      return customer;
    } catch (error) {
    } finally {
      await dbDisconnect();
    }
  }
}

export const userController = new UserControllers();
