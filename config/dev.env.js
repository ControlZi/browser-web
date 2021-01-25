"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ROOT: '"http://localhost:9061"',
  // API_ROOT: '"http://192.168.16.173"',
  API_ROOT: '"/browser-server"',
  JSON_ROOT: '"http://192.168.9.190:10061"'
});
