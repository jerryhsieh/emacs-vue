//
//
// File name : vue.config.js
// Author: vagrant @ 2018-10-29
// Copyright © 2018, vagrant, all rights reserved.
//
//
module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: ["node_modules"],
        aggregateTimeout: 300,
        poll: 1500,
      },
      public: "192.28.128.103", // vagrant machine address
    },
  },
};
