import { Elysia } from "elysia";

class UserRoutes {
  private app: Elysia;
  constructor() {
    this.app = new Elysia();
    this.config();
  }

  private config() {
    this.app.post("/create-user", () => "post");
  }
}
