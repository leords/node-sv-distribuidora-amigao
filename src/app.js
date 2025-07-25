import express from "express";
import cors from "cors";
import { router } from "./routes/routes.js";
import { logger } from "./middleware/logger.js";

const app = express();

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is runing 4000");
});

// informndo o express que ele vai receber req em json
app.use(express.json());

app.use(cors());

// ROTAS DE LOG
app.use(logger);

// ROTAS
app.use(router);
