
// keep  request and response handling logic clean and centralized.
import toast from 'react-hot-toast';
import URL from '../config/BASE_URL'
import axios from "axios";
const user = axios.create({ baseURL: URL.BASE_URL });
export const userRequest = ({ ...options }) => {
  // the Authorization header 
  user.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`;

  console.log(user.defaults.headers.common.Authorization,)
  // callback functions for handling responses and errors.
  const onSuccess = (response) => response;
  const onError = (error) => {
    console.log("axios interceptor", error);
    toast.error(error.response.data.message)
    return error;
  };
  return user(options).then(onSuccess).catch(onError);
};
