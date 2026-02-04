
import RestApiModel from "../models/RestApi.model.js";
import { fetch_currency } from "./get_currency.service.js";

export const saveCurrency = async () => {
  const data = await fetch_currency();

  const eur = data.find((item) => item.ccy === "EUR");
  const usd = data.find((item) => item.ccy === "USD");

  const isRecord = await RestApiModel.find();

  if (isRecord.length === 0) {
    await RestApiModel.create(
      [{ 
        valuta: {
          ccy: usd.ccy,
          base_ccy: usd.base_ccy,
          buy: usd.buy,
          sale: usd.sale,
          time: new Date(),
        }
      },
      {
        valuta: {
          ccy: eur.ccy,
          base_ccy: eur.base_ccy,
          buy: eur.buy,
          sale: eur.sale,
          time: new Date(),
        }
      }]
    )}
    
    else  {
        await RestApiModel.findOneAndUpdate({ "valuta.ccy": "EUR" },
          {
            $set : {
              "valuta.ccy": eur.ccy,
              "valuta.base_ccy": eur.base_ccy,
              "valuta.buy": eur.buy,
              "valuta.sale": eur.sale,
              "valuta.time": new Date(),
            }
          },
          {
            new : true
          }
        )

        await RestApiModel.findOneAndUpdate({ "valuta.ccy": "USD" },
          {
            $set : {
              "valuta.ccy": usd.ccy,
              "valuta.base_ccy": usd.base_ccy,
              "valuta.buy": usd.buy,
              "valuta.sale": usd.sale,
              "valuta.time": new Date(),
            }
          },
          {
            new : true 
          }
        )
    }
};
