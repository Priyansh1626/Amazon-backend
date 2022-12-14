require("./db/conn");
require("dotenv").config();
const userRouter = require("./routers/users");
const productRouter = require("./routers/products");
const paymentRouter = require("./routers/payment");
const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.enable('trust proxy');
app.use(express.json());
app.use(cookieParser());

app.use(productRouter);
app.use(userRouter);
app.use(paymentRouter);

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})
