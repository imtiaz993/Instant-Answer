import axios from "axios";

export const refreshToken = (setLoading) => {
  const API_URI = "https://appi.instantanswer.co/refreshToken/";

  setLoading(true);
  axios
    .post(API_URI, { refresh: localStorage.getItem("refresh") })
    .then((response) => {
      setLoading(false);
      localStorage.setItem("token", response.data.access);
      localStorage.setItem("tokenAdded", new Date().getTime());
    })
    .catch((error) => {
      setLoading(false);
      console.error(error.message);
    });
};
