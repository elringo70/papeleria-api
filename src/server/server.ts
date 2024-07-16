import { Elysia } from "elysia";
import userRoutes from "../routes/user.routes";
import connectDB from "../utils/db";

export class Server {
  private app: Elysia;

  constructor() {
    this.app = new Elysia();
    this.routes();
    connectDB();
  }

  public start() {
    this.app.listen(3000, () => console.log("Server on port 3000"));
  }

  private routes() {
    this.app.group("/api/v1/user", (app) => app.use(userRoutes));
  }
}
