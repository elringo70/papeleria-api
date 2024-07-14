import { Elysia } from "elysia";

export class Server {
  private app: Elysia;

  constructor() {
    this.app = new Elysia();
      }

  public start() {
    this.app.listen(3000, () => console.log("Server on port 3000"));
  }
}
