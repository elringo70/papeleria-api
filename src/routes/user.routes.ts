import { Elysia } from "elysia";
import { userService } from "../services/user.service";

class UserRoutes {
  public app: Elysia;

  constructor() {
    this.app = new Elysia();
    this.config();
  }

  private config() {
    this.app.get("/get-users/:user", ({ params: { user }, query }) =>
      userService.getUsers(user, query),
    );
  }
}

const userRoutes = new UserRoutes();
export default userRoutes.app;
