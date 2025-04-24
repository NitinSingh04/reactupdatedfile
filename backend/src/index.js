import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbconnect from "./utility/database.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

dbconnect();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});

app.get("/", (req, res) => {
  return res.json({
    message: "connected",
    success: true,
  });
});

// Import Routes
import {
  createTicket,
  deleteTicket,
  getAllTicket,
  changeFlag,
  getTicketByDate,
} from "./controllers/ticket.controller.js";
import { verifyUserJWT } from "./middlewares/auth.js";
import { loginAdmin, logoutAdmin, registerAdmin } from "./controllers/admin.controller.js";

// Define Routes
app.post("/api/admin/register", registerAdmin);
app.post("/api/admin/login", loginAdmin);
app.post("/api/admin/logout", verifyUserJWT, logoutAdmin);


app.post("/api/createTicket", createTicket);
app.delete("/api/deleteTicket", verifyUserJWT , deleteTicket);
app.get("/api/getAllTicket", verifyUserJWT , getAllTicket);
app.put("/api/changeFlag", verifyUserJWT , changeFlag);
app.post("/api/getTicketByDate", verifyUserJWT , getTicketByDate);

export { app };
