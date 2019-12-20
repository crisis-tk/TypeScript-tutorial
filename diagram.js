"use strict";
// draw関数の引数として Diagramインターフェイスを指定する
// -> draw関数は Diagramインターフェイスと同じ構造のデータしか受け取れなくなる.
var draw = function (diag) {
    console.log('name:' + diag.name);
};
// draw関数を呼ぶときは, 
// Diagramインタフェースで定義された構造の JavaScriptオブジェクトを渡す.
draw({ name: '四角形', height: 100, width: 200 });
// インターフェイスを実装した class を作ることができる.
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        this.name = '四角形';
        this.height = 100;
        this.width = 200;
    }
    return Rectangle;
}());
var rect = new Rectangle();
console.log(rect);
