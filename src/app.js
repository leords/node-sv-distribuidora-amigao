import express from "express";
import cors from "cors";
import { router } from "./routes.js"

const app = express();

app.listen(process.env.PORT || 4000, () => {
    console.log('Server is running 4000!');
});


// informndo o express que ele vai receber req em json

app.use(express.json());

app.use(cors());

app.use(router);