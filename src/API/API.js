"use strict";

import axios from "axios";
import emailjs from "@emailjs/browser";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_DATA,
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

export const messageSend = async (
  name,
  lname,
  mg,
  email,
  subject = "¡Nuevo envío!"
) => {
  try {
    let result = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE,
      {
        user_name: name + " " + lname,
        message: mg,
        user_email: email,
        from_name: subject,
      },
      import.meta.env.VITE_EMAIL_KEY_PUBLIC
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
