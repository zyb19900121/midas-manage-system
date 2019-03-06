const baseUrl = "http://127.0.0.1:8090";
// process.env.NODE_ENV == "development"
//   ? "http://127.0.0.1:3000"
//   : "https://joyzone.xyz";
//test

const apiConfig = {
  testHttp: {
    url: "/",
    method: "get",
    baseUrl
  }
};

export { baseUrl, apiConfig };
