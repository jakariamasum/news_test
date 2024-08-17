/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(cors());

// application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from dynamic news-paper ");
});

// global error handler
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
