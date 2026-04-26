/**
 * Mock API for updating user profile data (Name, Phone, etc.).
 * @param {Object} payload - New profile data, along with an email for identification.
 * @returns {Promise<Object>}
 */

const apiUpdateProfile = (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(payload);
    }, 1500);
  });
};

export default apiUpdateProfile;
