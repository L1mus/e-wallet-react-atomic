/**
 * Mock API for changing the security PIN.
 * @param {Object} payload - Must contain email, oldPin, and newPin.
 * @returns {Promise<Object>}
 */
const apiChangePin = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!payload.newPin || payload.newPin.length !== 6) {
        reject("The new PIN must consist of 6 digits");
      } else {
        resolve({ email: payload.email, pin: payload.newPin });
      }
    }, 1500);
  });
};

export default apiChangePin;
