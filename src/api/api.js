import http from "./http";
import { getToken, setToken } from "./token";

export const addToCart = async (product) => {
  const isLoggedIn = typeof getToken() === "string";
  if (!isLoggedIn) return alert("You need to log in first");
  try {
    const response = await http.post(`/cart`, {
      product: product._id,
      quantity: 1,
    });
    if (response.status === 200) {
      alert("Item added to your cart successfully");
    }
    return Promise.resolve();
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const addToFavorite = async (product) => {
  const isLoggedIn = typeof getToken() === "string";
  if (!isLoggedIn) return alert("You need to log in first");
  try {
    return http.post(`/favorites`, {
      product: product._id,
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const removeFromFavorite = async (params) => {
  const isLoggedIn = typeof getToken() === "string";
  if (!isLoggedIn) return alert("You need to log in first");
  try {
    return http.delete(`/favorites`, { params });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getCart = async () => {
  try {
    return http.get(`/cart`);
  } catch (e) {
    console.log(e);
  }
};

export const deleteCart = async (params) => {
  try {
    return http.delete(`/cart`, { params });
  } catch (e) {
    console.log(e);
  }
};

export const editCart = async (params) => {
  try {
    return http.put(`/cart`, params);
  } catch (e) {
    console.log(e);
  }
};

export const createOrder = async (params) => {
  try {
    return http.post(`/order`, params);
  } catch (e) {
    console.log(e);
  }
};

export const registerUser = async ({
  email,
  firstName,
  password,
  lastName,
  address,
  phone,
}) => {
  try {
    const res = await http.post(`/auth/register`, {
      username: email,
      firstName,
      password,
      email,
      lastName,
      address,
      phone,
    });
    if (res.data.token) {
      setToken(res.data.token);
      return Promise.resolve();
    }
  } catch (e) {
    console.log(e);
    setToken(null);
    throw e;
  }
};

export const fetchProducts = async () => {
  try {
    return http.get(`/catalog`);
  } catch (e) {
    console.log(e);
  }
};

export const fetchProduct = async (productId) => {
  try {
    return http.get(`/catalog/${productId}`);
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await http.post(`/auth/login`, {
      email,
      password,
    });
    if (res.data.token) {
      setToken(res.data.token);
    }
    return res.data.token;
  } catch (e) {
    setToken(null);
    throw e;
  }
};

export const getUser = async () => {
  try {
    return http.get(`/user`);
  } catch (e) {
    console.log(e);
  }
};

export const getFavorites = async () => {
  try {
    const res = await http.get(`/user`);
    return res.data.favorites;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const editUser = async (data) => {
  try {
    return http.put(`/user`, data);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
