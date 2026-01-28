import { fetch_currency } from "./get_currency.service.js";

let cache_data = null;

const set_cache = async () => {
  const data = await fetch_currency();
  const parseData = data.reduce((accum, think) => {
    accum[think.ccy] = {
      buy: think.buy,
      sale: think.sale,
    };

    return accum;
  }, {});

  if (!cache_data) {
    cache_data = parseData;
    // console.log('CACHED DATA:', cache_data);
  }
};

export const get_cache = async () => {
  if (!cache_data) {
    await set_cache();
  }

  // console.log('CACHED DATA:', cache_data);
  return cache_data;
};
