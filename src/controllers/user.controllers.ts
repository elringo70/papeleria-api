import { dbConnect, dbDisconnect } from "../utils/db";

class UserControllers {
  async create() {
    try {
      await dbConnect();
    } catch (error) {
    } finally {
      await dbDisconnect();
    }
  }
}
