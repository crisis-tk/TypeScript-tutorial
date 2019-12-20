"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @HelloWorldデコレーターを定義する
function HelloWorld() {
    return function (constructor) {
        console.log('Decorator Call!!');
    };
}
var TargetClass = /** @class */ (function () {
    function TargetClass() {
        console.log('Constractor Call!!');
    }
    TargetClass = __decorate([
        HelloWorld()
    ], TargetClass);
    return TargetClass;
}());
var tg = new TargetClass();
// デコーレーターは実験的な仕様
// なのでコンパイルするときにオプション指定(--experimentalDecorators --target ES5)が必要
//
// 実行結果
// $ tsc --experimentalDecorators --target ES5 decorator.ts
// $ node decorator.js
// Decorator Call!!
// Constractor Call!!
