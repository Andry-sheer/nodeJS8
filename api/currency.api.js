
import { get_cache } from "../services/cache.service.js";


export const currencyAPI = async (req, res) => {
  const data = await get_cache();
  res.json(data);
}


export const currentAPI = async (req, res) => {
  const { current }  = req.params;
  const data = await get_cache();

  const currencyUPPERCASE = current.toUpperCase();

  if (currencyUPPERCASE in data) {
    return res.json({
      [currencyUPPERCASE]: data[currencyUPPERCASE]
    })
  }

  return res.status(404).json({
    error : 'Currency not found'
  });
}
