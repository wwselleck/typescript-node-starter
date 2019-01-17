import express = require("express");

function startServer() {
  const app = express();
  app.get("/", (req: express.Request, res: express.Response) => {
    res.json({ hello: "there" });
  });

  app.listen(3000);
}

startServer();
