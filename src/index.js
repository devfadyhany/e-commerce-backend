import "dotenv/config";
import app from "./app.js";
import connectDB from "./DB/connection.js";

connectDB();

if (process.env.NODE_ENV !== "production") {
  app.listen(process.env.PORT || 5000, () => console.log("Dev server up"));
}
