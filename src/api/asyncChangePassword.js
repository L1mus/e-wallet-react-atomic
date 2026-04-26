const apiChangePassword = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!payload.existingPassword || !payload.newPassword) {
        reject("All fields must be filled in!");
      } else {
        resolve({ email: payload.email, password: payload.newPassword });
      }
    }, 1500);
  });
};

export default apiChangePassword;
