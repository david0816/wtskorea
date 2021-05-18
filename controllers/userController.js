"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = exports.join = void 0;

var join = function join(req, res) {
  return res.send("join");
};

exports.join = join;

var login = function login(req, res) {
  return res.send("login");
};

exports.login = login;

var logout = function logout(req, res) {
  return res.send("logout");
};

exports.logout = logout;