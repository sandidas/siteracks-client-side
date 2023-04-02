import React from "react";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";


interface AxiosRequestMethod {
  get: (...args: any[]) => Promise<any>;
  post: (...args: any[]) => Promise<any>;
  put: (...args: any[]) => Promise<any>;
  patch: (...args: any[]) => Promise<any>;
  delete: (...args: any[]) => Promise<any>;
}

interface IHandleSubmitProps {
  axiosInstance: AxiosInstance | any;
  method: keyof AxiosRequestMethod;
  url: string;
  data?: any;
  requestConfig?: AxiosRequestConfig;
  header?: any;
}
interface ApiResponse {
  success?: boolean;
  message?: string;
  data?: any;
  status?: number;
  error?: string;
}


const UseAxiosAdmin = async (props: IHandleSubmitProps): Promise<ApiResponse> => {

  // SECURITY STEPS 1:
  // before hitting the api endpoint we have to check current cookies
  //

  // get session from nextjs hook
  // TODO: we will get token from nextjs getSession hook to authorization token
  const {
    axiosInstance, // axios instance
    method, //(required): The HTTP method to be used for the request, which can be one of 'get', 'post', 'put', or 'delete'.     
    url, //  (required): The URL to send the request to.
    data, //  (optional): An object containing the data to be sent as the request body.
    requestConfig, // // (optional): An object containing additional Axios request configuration options.
    header
  } = props;
  // console.log(data);
  
  const API_URL = `${process.env.API_URL}${url}`;
  console.log(API_URL);
  // const options = {
  //   headers: { "content-type": "application/json; charset=UTF-8" },
  //   withCredentials: true, // this is to send the credentials
  // };
  const headers = {
    // Authorization: `Bearer ${process.env.ACCESS_TOKEN_SECRET}`,
    // "content-type": "application/json; charset=UTF-8"
    ...header,
    'content-type': 'application/json',
  }
  const config = {
    ...requestConfig,
    withCredentials: true, // this is to send the credentials
  }


  try {
    const ctrl = new AbortController();
    const res = await axiosInstance[method.toLowerCase()](
      API_URL,
      {
        ...data,
        ...headers,
        ...config,
        signal: ctrl.signal,
      },
      // options
    );
    
    // if failed, return error
    // console.log("AXIOS RES", res);
    if (!res?.data?.success) {
      // return {
      //     status: 400,
      //     success: false,
      //     message: res?.data?.error
      // }
      return res?.data
      // throw new Error(res?.data);
    }
    // console.log("res", res.data);
    // if success return response
    return res;

  } catch (error: AxiosError | any) {
    // console.log("errr", error);
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status || 400,
        success: false,
        message: error.response?.data?.message || "Network Error",
      };
    } else {
      return {
        status: 400,
        success: false,
        message: error?.message || "Unknown Error",
      };
    }
  }
};

export default UseAxiosAdmin;

// HOW TO USE THIS HELPER
/*
export const getServerSideProps = async () => {
  let data;
  let error;
  try {
    const response = await UseAxios({
      axiosInstance: axios,
      method: "get",
      url: "/api/package/getpackages",
      // requestConfig: {},
    });
    // const response = await axios.get('https://example.com/api/data');

    if (response && response.data) {
      data = response.data;
      console.log("Index Response", data);
      return {
        props: {
          data,
        },
      };
    } else {
      error = "Failed to load data";
      return { props: { error: "Failed to load data" } };
    }
  } catch (error) {
    console.error(error);
    error = "Failed to load data";
    return { props: { error: "Failed to load data" } };
  }
};
*/



// WHAT IS HEADER AND EXAMPLE
//===========================
// Headers are an object that contains key-value pairs representing HTTP headers to be sent along with the request. HTTP headers provide additional information about the request or response, such as the content type of the data being sent, authorization credentials, or cache control directives. The headers object can be used to set custom headers for your request, such as an Authorization header for authentication or a Content-Type header to indicate the type of data you're sending.

// const headers = {
// 'Authorization': 'Bearer ' + token,
// 'Content-Type': 'application/json'
// "content-type": "application/json; charset=UTF-8"
// };

// WHAT IS CONFIG AND EXAMPLE
//===========================
// The config object contains configuration options for the Axios request. It can be used to set options like the timeout for the request, the responseType expected, the baseURL for the API, the withCredentials option for handling cookies and authentication, and more. By default, Axios provides sensible defaults for many of these options, but you can customize them as needed by passing a config object to the Axios request.
// const config = {
//     timeout: 5000,
//     withCredentials: true,
//     validateStatus: function (status) {
//         return status >= 200 && status < 300; // default
//     }
// };

// withCredentials
// =================
// The withCredentials option in Axios is used to send cookies along with the request to a server. By default, cookies are not sent with a request because of security reasons. However, there are cases where it's necessary to send cookies, for example, when making a CORS (Cross-Origin Resource Sharing) request to a different domain.

// When withCredentials is set to true, Axios will include any cookies from the current domain in the request. This allows the server to know that the request is coming from a trusted source and can be useful for authentication purposes. Note that the server must be configured to accept cross-origin requests with credentials, otherwise the request will fail.