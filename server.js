const next = require("next");
const routes = require("./routes");
const { createServer } = require("http");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);
app.prepare().then(() => {
  createServer(handler).listen(3030);
  console.log("Client server started on: http://localhost:3030/")
});
