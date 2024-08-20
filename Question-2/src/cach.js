const cache = {};

export const getCachedData = (key) => {
  return cache[key];
};

export const setCachedData = (key, data) => {
  cache[key] = data;
};
