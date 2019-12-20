"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// クラスやインターフェイス, 変数, 関数を他のモジュールから利用するときは, 
// export キーワードを指定してあげる.
exports.PI = 3.14159;
class Circle {
    area(r) {
        return r * r * exports.PI;
    }
}
exports.Circle = Circle;
