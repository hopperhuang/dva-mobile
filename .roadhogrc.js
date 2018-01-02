import pxtorem from 'postcss-pxtorem';

export default {
  "entry": "src/index.js",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { libraryName: "antd-mobile", style: "css" }]
      ],
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 37.5,
          propWhiteList: [],
        }),
      ],
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { libraryName: "antd-mobile", style: "css" }]
      ],
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 37.5,
          propWhiteList: [],
        }),
      ],
    }
  }
}