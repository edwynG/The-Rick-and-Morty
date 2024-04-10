"use strict";

import axios from "axios";


export const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
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

export const messageSend = async (name,lname,mg,email,subject = "¡Nuevo envío!") => {
    try {
      // let result = await emailjs.send("service_9pki6ur","template_decage7",{
      //   user_name: "g",
      //   message: "f",
      //   user_email: "g",
      //   from_name: "fg",
      //   });

        console.log(result)
    } catch (error) {
      console.log(result)
    }
};
