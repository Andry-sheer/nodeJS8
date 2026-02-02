import { API_BANK } from "../constants/constants.js";

export const fetch_currency = async () => {
  try {
    const fetch_bank = await fetch(API_BANK);
    const data = await fetch_bank.json();
    return data;
  } catch (error) {
    throw error
  }
};