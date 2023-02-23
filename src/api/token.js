export const setToken = (token) => localStorage.setItem("auth_token", token);
export const getToken = () => localStorage.getItem("auth_token");
export const removeToken = () => localStorage.removeItem("auth_token");

export const setAdminToken = (token) =>
  localStorage.setItem("admin_auth_token", token);
export const getAdminToken = () => localStorage.getItem("admin_auth_token");
export const removeAdminToken = () =>
  localStorage.removeItem("admin_auth_token");
