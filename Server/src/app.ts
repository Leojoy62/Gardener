import express, { Application } from "express";
import cors from "cors";
import router from "./app/routes";

const app: Application = express();

//parsers
app.use(express.json());

app.use(cors({ origin: ["http://localhost:5173"] }));

app.get("/", (req, res) => {
  res.send("Hello from Online Nursery App");
});

// application routes
app.use("/api", router);

export default app;
