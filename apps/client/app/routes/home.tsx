import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  useEffect(() => {
    (async () => {
      const resp = await fetch("http://localhost:3000/products");
      if (!resp.ok) console.error("Something went wrong!");
      const data = await resp.json();
      console.log(data);
    })();
  }, []);
  return <Welcome />;
}
