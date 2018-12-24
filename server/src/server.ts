import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.post("/login", async ctx => {
  const { name } = ctx.request.body;

  ctx.body = {
    status: "success"
  };

  ctx.cookies.set("token", `${name}:token`);
});

router.post("/malicious", async ctx => {
  console.log("A malicious action is being proceed");

  const token = ctx.cookies.get("token");

  if (!token) {
    ctx.status = 403;
    ctx.body = {
      status: "Forbidden",
      message: "No token found"
    };
  } else {
    ctx.body = {
      status: "sucess",
      message: `You are authorized to do this action with the token: ${token}`
    };
  }
});

app.use(router.routes());

app.listen(5000);

console.log("Server running on port 5000");
