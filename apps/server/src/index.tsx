import { Hono } from "hono";
import { cors } from "hono/cors";
import View from "./html/index";

const app = new Hono();

app.use("*", cors());

app.get("/", (c) => {
  return c.html(<View />);
});

app.get("/try", (c) => {
  return c.text("I dey try you shege");
});

app.get("/products", (c) => {
  return c.json([
    {
      title: "Table",
      description: "A nice table",
      price: 99.9,
    },
    {
      title: "Chair",
      description: "A nice chair.",
      price: 99.9,
    },
  ]);
});

export default app;
