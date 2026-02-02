import config from "config";

export const middleValidation = async (req, res, next) => {
  const { current }  = req.params;
  const allowedCurrency = config.get('currency.accepted');

    if (!allowedCurrency.includes(current)) {
      return res.status(400).json({ error : "Invalid Currency" })
    }

  next();
}