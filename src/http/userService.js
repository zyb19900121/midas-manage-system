// import {config, errorCode, errorCodeByType, constans} from './config.js'
import { apiConfig } from "./apiConfig.js";
import ajax from "./ajax";

class UserService {
  // constructor() {}
  async getRequest(type, data) {
    let apiType = apiConfig[type] || {
      url: "",
      method: "POST"
    };
    try {
      let response = await ajax.get(apiType.url, data, apiType.baseUrl);
      if (response) {
        return this.resolve(response, type);
      }
    } catch (e) {
      // Message({
      //   message: "系统错误，请联系开发人员",
      //   type: "error"
      // });
      return Promise.reject(e); // 所有的错误从这返回调用者的catch
    }
  }
  async postRequest(type, data) {
    let apiType = apiConfig[type];
    try {
      let response = await ajax.post(apiType.url, data, apiType.baseUrl);
      if (response) {
        return this.resolve(response, type);
      }
    } catch (e) {
      // Message({
      //   message: "系统错误，请联系开发人员",
      //   type: "error"
      // });
      return Promise.reject(e); // 所有的错误从这返回调用者的catch
    }
  }

  async getRestfulRequest(type, data) {
    let apiType = apiConfig[type] || {
      url: "",
      method: "POST"
    };
    try {
      let response = await ajax.getRestful(apiType.url, data, apiType.baseUrl);
      if (response) {
        return this.resolve(response, type);
      }
    } catch (e) {
      // Message({
      //   message: "系统错误，请联系开发人员",
      //   type: "error"
      // });
      return Promise.reject(e); // 所有的错误从这返回调用者的catch
    }
  }

  async putRequest(type, param, data) {
    let apiType = apiConfig[type] || {
      url: "",
      method: "PUT"
    };
    try {
      let response = await ajax.put(apiType.url, param, data, apiType.baseUrl);
      if (response) {
        return this.resolve(response, type);
      }
    } catch (e) {
      // Message({
      //   message: "系统错误，请联系开发人员",
      //   type: "error"
      // });
      return Promise.reject(e); // 所有的错误从这返回调用者的catch
    }
  }

  async uploadRequest(type, data) {
    let apiType = apiConfig[type];
    try {
      let response = await ajax.upload(apiType.url, data, apiType.baseUrl);
      if (response) {
        return this.resolve(response, type);
      }
    } catch (e) {
      // Message({
      //   message: "系统错误，请联系开发人员",
      //   type: "error"
      // });
      return Promise.reject(e); // 所有的错误从这返回调用者的catch
    }
  }

  async deleteRequest(type, data) {
    let apiType = apiConfig[type] || {
      url: "",
      method: "POST"
    };
    try {
      let response = await ajax.delete(apiType.url, data, apiType.baseUrl);
      if (response) {
        return this.resolve(response, type);
      }
    } catch (e) {
      // Message({
      //   message: "系统错误，请联系开发人员",
      //   type: "error"
      // });
      return Promise.reject(e); // 所有的错误从这返回调用者的catch
    }
  }
  resolve(response, type) {
    let { data, status } = response;
		data = data.constructor === String ? JSON.parse(data) : data;
		// let sErrorCode = data.status || response.status;
    let oResponseData = {
      data,
      status
    };
    return oResponseData;
  }
}
export default new UserService();
