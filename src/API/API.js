"use strict";

import axios from "axios";

 export const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 10000,
});

export const getAxios = async (url) => {
  try {
    let prom = await instance(url);
    return prom
  } catch (err) {
    return err
  }
};


export const handlerRequesteInstance = async () => {
    try {
      let res = await instance();
      return res;
    } catch (error) {
      return error;
    }
  };

  export const getAxiosMutiple = async (url_arr) => {
    try {
      let prom = await Promise.all(url_arr);
      return prom
    } catch (err) {
      return err
    }
  };