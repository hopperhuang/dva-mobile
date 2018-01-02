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
      "browserslist": [
        "> 1%",
        "last 2 versions"
      ]
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
      "browserslist": [
        "> 1%",
        "last 2 versions"
      ]
    }
  }
}