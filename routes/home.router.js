import { Router } from "express";
import { currencyAPI, currentAPI } from "../api/currency.api.js";
import { middleValidation } from "../middleware/currency.middleware.js";

const router = Router();

router.get("/", (req, res) => {
  res.end("work... I don`t now what write here?");
});

router.get("/api/currency", currencyAPI);

router.get("/api/currency/:current", middleValidation, currentAPI);

export default router;
