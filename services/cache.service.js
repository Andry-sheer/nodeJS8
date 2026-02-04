import RestApiModel from "../models/RestApi.model.js";

let cache_data = null;

const set_cache = async () => {
  try {
    const data = await RestApiModel.find().limit(2);

    const parseData = data.reduce((acc, item) => {
      acc[item.valuta.ccy] = {
        buy: item.valuta.buy,
        sale: item.valuta.sale,
      };
      return acc;
    }, {});

    if (!cache_data) {
      cache_data = parseData;
      // console.log('SET CACHED DATA:', cache_data);
    }
  } catch (error) {
    throw new Error('error setting cache...')
  }
};

export const get_cache = async () => {
  if (!cache_data) {
    await set_cache();
  }

  // console.log('CACHED DATA:', cache_data);
  return cache_data;
};