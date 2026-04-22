const apiCreatePin = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2500);
  });
};

export default apiCreatePin;
