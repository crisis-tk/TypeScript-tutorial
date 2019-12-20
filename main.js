"use strict";
exports.__esModule = true;
// 他のモジュールで定義したものを使う場合は import キーワードを使う.
// 指定する際は拡張子は除く
var circle_1 = require("./circle");
var c = new circle_1.Circle();
console.log(c.area(10));
