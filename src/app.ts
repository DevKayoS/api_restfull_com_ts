// ENV variables
require("dotenv").config();

import express  from "express"
import config from "config"


const app = express()

// json middleware
app.use(express.json())

// DB
import db from "../config/db"

// middleware
import morganMIddleware from "./middleware/morganMiddleware";
app.use(morganMIddleware)

// routes
import router from "./router"
app.use("/api/", router);

// Logger
import Logger from "../config/logger";


// app port
const port = config.get<number>("port")

app.listen(port, async () => {
    await db();

    Logger.info(`Aplicação está funcionando na porta: ${port} `)
})