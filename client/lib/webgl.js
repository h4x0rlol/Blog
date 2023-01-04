export const debounce = (callback, duration) => {
  let timer;

  return (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback && callback(event);
    }, duration);
  };
};

export const radians = (degrees) => {
  return (degrees * Math.PI) / 180;
};
