type Bindings = {
  TEST_SECRET: string;
};
import { Hono } from "hono";
import { cors } from "hono/cors";
import View from "./html/index";

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", cors());

app.get("/", (c) => {
  return c.html(<View />);
});

app.get("/secret", (c) => {
  return c.text(`Here is a secret: ${process.env.TEST_SECRET}`);
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
