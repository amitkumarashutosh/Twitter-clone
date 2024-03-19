import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 3001;

//rest of the package
import cookieParser from "cookie-parser";
import cors from "cors";

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//routes
import userRouter from "./src/routes/user.route.js";
import tweetRouter from "./src/routes/tweet.route.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tweets", tweetRouter);

//not foud
import notFound from "./src/utils/notFound.js";

app.use(notFound);

//database
import connectDB from "./src/db/index.js";

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
