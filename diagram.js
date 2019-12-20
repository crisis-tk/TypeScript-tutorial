"use strict";
// draw関数の引数として Diagramインターフェイスを指定する
// -> draw関数は Diagramインターフェイスと同じ構造のデータしか受け取れなくなる.
let draw = function (diag) {
    console.log('name:' + diag.name);
};
// draw関数を呼ぶときは, 
// Diagramインタフェースで定義された構造の JavaScriptオブジェクトを渡す.
draw({ name: '四角形', height: 100, width: 200 });
// インターフェイスを実装した class を作ることができる.
class Rectangle {
    constructor() {
        this.name = '四角形';
        this.height = 100;
        this.width = 200;
    }
}
const rect = new Rectangle();
console.log(rect);
