"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 他のモジュールで定義したものを使う場合は import キーワードを使う.
// 指定する際は拡張子は除く
const circle_1 = require("./circle");
const c = new circle_1.Circle();
console.log(c.area(10));
