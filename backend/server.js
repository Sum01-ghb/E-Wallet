import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 5002;
const app = express();

app.get("/", (req, res) => {
  res.send("It's working");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
