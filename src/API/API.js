"use strict";

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 10000,
});

export const getAxios = async (url) => {
  try {
    let data = await instance(url);
    return data;
  } catch (err) {
    return { data: null, status: false, error: err };
  }
};

export const handlerRequesteInstance = async () => {
  try {
    let res = await instance();
    return res;
  } catch (error) {
    return { data: null, status: false, error: error };

  }
};

export const getAxiosMutiple = async (url_arr) => {
  try {
    let prom = await Promise.all(url_arr);
    return prom;
  } catch (err) {
    return err;
  }
};
