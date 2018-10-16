// 自定义webpack配置

//按需加载
const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

//修改路径别名
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = function override(config, env) {
  // do stuff with the webpack config...

  // 按需加载
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }], // change importing css to less
    config
  );

  // 添加LESS支持
  config = rewireLess.withLoaderOptions({
    // modifyVars: { "@primary-color": "#1DA57A" },
    javascriptEnabled: true
  })(config, env);

  // 修改路径别名
  config.resolve.alias = {
    "@": resolve("src"),
    src: resolve("src"),
    assets: resolve("src/assets"),
    http: resolve("src/http"),
    views: resolve("src/views"),
    components: resolve("src/components"),
    utils: resolve("src/utils")
  };

  return config;
};
