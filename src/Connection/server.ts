import express from "express";
import morgan from "morgan";
import cors from "cors";

import router from '../Rutas/routes'
import routerUser from "../Rutas/routesUser";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(router);
app.use(routerUser);

export default app;


