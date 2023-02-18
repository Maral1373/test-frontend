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
  } catch (e) {
    console.log(e);
  }
};
export const addToFavorite = async () => {
  const isLoggedIn = typeof getToken() === "string";
};

export const registerUser = async ({
  email,
  firstName,
  password,
  lastName,
  address,
  phone,
  callback,
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
      callback();
    }
  } catch (e) {
    console.log(e);
    setToken(null);
  }
};

export const fetchProducts = async () => {
  try {
    return await http.get(`/catalog`);
  } catch (e) {
    console.log(e);
  }
};

export const fetchProduct = async (productId) => {
  try {
    return await http.get(`/catalog/${productId}`);
  } catch (e) {
    console.log(e);
  }
};

export const getCart = async (productId) => {
  try {
    return await http.get(`/cart`);
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = async (email, password, callback) => {
  try {
    const res = await http.post(`/auth/login`, {
      email,
      password,
    });
    if (res.data.token) {
      setToken(res.data.token);
      callback();
    }
  } catch (e) {
    setToken(null);
    console.log(e);
  }
};
