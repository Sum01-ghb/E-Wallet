import express from "express";
import "dotenv/config";
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";
import job from "./config/cron.js";

const PORT = process.env.PORT || 5002;
const app = express();

if (process.env.NODE_ENV === "production") job.start();

app.use(express.json());
app.use(rateLimiter);

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
