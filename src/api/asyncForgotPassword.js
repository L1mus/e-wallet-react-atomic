import { getDataUserRegister } from "../utils/storage";

const apiForgotPassword = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = getDataUserRegister(user);
      const foundUser = data.registerUser.find((u) => {
        return u.email === user.email;
      });
      if (foundUser) {
        resolve(foundUser);
      } else {
        reject("Email not Registered");
      }
    }, 1500);
  });
};

export default apiForgotPassword;
