import express from "express";
import "dotenv/config";
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";

const PORT = process.env.PORT || 5002;
const app = express();
app.use(express.json());
app.use(rateLimiter);

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
