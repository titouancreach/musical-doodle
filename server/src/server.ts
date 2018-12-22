import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

router.post("/login", async ctx => {
  ctx.body = {
    status: "success"
  };
});

app.use(router.routes());

app.listen(5000);

console.log("Server running on port 5000");
