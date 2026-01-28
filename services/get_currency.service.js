
export const fetch_currency = async () => {
  try {
    const API_BANK = process.env.API_BANK;
    const fetch_bank = await fetch(API_BANK);
    const data = await fetch_bank.json();
    return data;
  } catch (error) {
    throw error
  }
};