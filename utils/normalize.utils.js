
export const normalizeText = (text) => {
  if (!text || typeof text !== 'string') {
    throw new Error('error: please input strings')
  }
  return text.toUpperCase();
}