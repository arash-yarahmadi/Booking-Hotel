import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = import.meta.env.VITE_API_BASE_URL || 5000;

server.listen(PORT, () => {
  console.log("JSON Server running on port", PORT);
});
