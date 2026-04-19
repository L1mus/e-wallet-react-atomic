import { isEmailExists } from "../utils/storage";

const apiRegister = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isEmailExists(data.email)) {
        reject(
          "This email is already registered. Please use a different email address",
        );
      } else {
        resolve(data);
      }
    }, 2500);
  });
};

export default apiRegister;
