import axios from "axios";
import qs from "qs";

export default {
  get(url, params, baseURL) {
    let config = {
      method: "get",
      url,
      baseURL: baseURL,
      params,
      timeout: 30000,
      responseType: "json"
    };
    return axios.get(url, config);
  },
  getRestful(url, params, baseURL) {
    let config = {
      method: "get",
      url,
      baseURL: baseURL,
      // params,
      timeout: 30000,
      responseType: "json"
    };
    return axios.get(`${url}/${params}`, config);
  },
  post(url, data, baseURL) {
    let config = {
      method: "post",
      url,
      baseURL: baseURL,
      data: qs.stringify(data),
      timeout: 30000,
      responseType: "json",
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    };
    return axios.post(url, data, config);
  },

  put(url, param, data, baseURL) {
    let config = {
      method: "put",
      url,
      baseURL: baseURL,
      data: qs.stringify(data),
      timeout: 30000,
      responseType: "json",
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    };
    return axios.put(`${url}/${param}`, data, config);
  },

  //对Restful api做了相应调整， url/1,2,3,4,5
  delete(url, params, baseURL) {
    let config = {
      method: "delete",
      url,
      baseURL: baseURL,
      timeout: 30000,
      responseType: "json"
    };
    return axios.delete(`${url}/${params}`, config);
  },

  upload(url, data, baseURL) {
    let param = new FormData(); //创建form对象
    if (data.type) {
      param.append("type", data.type);
    }
    param.append("file", data.file); //通过append向form对象添加数据

    let config = {
      method: "post",
      url,
      baseURL: baseURL,
      // data: qs.stringify(data),
      timeout: 30000,
      responseType: "json",
      headers: { "Content-Type": "multipart/form-data" }
    };
    return axios.post(url, param, config);
  }
};
