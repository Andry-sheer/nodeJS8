import { Router } from "express";
import { normalizeText } from "../utils/normalize.utils.js";
import { get_cache } from "../services/cache.service.js";

const router = Router();

router.get("/", (req, res) => {
  res.end("work... I don`t now what write here?");
});

router.get("/currency", async (req, res) => {
  try {
    const data = await get_cache();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: {
        message: error.message,
        status: 500,
      },
    });
  }
});

router.get("/currency/:current", async (req, res) => {
  try {
    const data = await get_cache();
    const normalText = normalizeText(req.params.current);

    let valuta = null;

    for (const key in data) {
      if (key === normalText) {
        valuta = { [key]: data[key] };
        break;
      }
    }

    if (!valuta) {
      res.status(404).json({
        error: {
          valuta: normalText,
          message: "valuta not found",
          status: 404,
        },
      });
    } else {
      res.status(200).json(valuta);
    }
  } catch (error) {
    res.status(500).json({
      error: {
        message: error.message,
        status: 500,
      },
    });
  }
});

export default router;
