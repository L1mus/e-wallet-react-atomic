const KEYS = {
  session: "ew-session",
  database: "persist:ew-DB",
};

export const getData = () => {
  const data = localStorage.getItem(KEYS.database);
  return data ? JSON.parse(data) : null;
};

export const getDataUserLogin = () => {
  const dataParse = localStorage.getItem(KEYS.database);
  const data = JSON.parse(dataParse);
  return data ? JSON.parse(data.loginReducer)?.loginUser : [];
};

export const getDataUserRegister = () => {
  const dataParse = localStorage.getItem(KEYS.database);
  const data = JSON.parse(dataParse);
  return data ? JSON.parse(data.registerReducer) : [];
};

export const saveData = (data) => {
  localStorage.setItem(KEYS.database, JSON.stringify(data));
};

export const isEmailExists = (email) => {
  const data = getDataUserRegister();
  return data.registerUser.some((user) => user.email === email);
};

export const getSession = () => {
  const session = localStorage.getItem(KEYS.session);
  return session ? JSON.parse(session) : null;
};

export const saveSession = (user) => {
  localStorage.setItem(KEYS.session, JSON.stringify(user));
};

export const clearSession = () => {
  localStorage.removeItem(KEYS.session);
};

export const getReviews = () => {
  const db = getData();
  return db && db.reviews ? db.reviews : [];
};
