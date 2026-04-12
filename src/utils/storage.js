const KEYS = {
  session: "ew-session",
  database: "ew-DB",
};

export const getData = () => {
  const data = localStorage.getItem(KEYS.database);
  return data ? JSON.parse(data) : { users: [], reviews: [] };
};

export const saveData = (data) => {
  localStorage.setItem(KEYS.database, JSON.stringify(data));
};

export const isEmailExists = (email) => {
  const data = getData();
  return data.users.some((user) => user.email === email);
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
