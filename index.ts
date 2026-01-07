import concurrently from "concurrently";

concurrently([
  {
    name: "server",
    command: "bun dev",
    cwd: "apps/server",
    prefixColor: "cyan",
  },
  {
    name: "client",
    command: "bun dev",
    cwd: "apps/client",
    prefixColor: "green",
  },
]);
