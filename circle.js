"use strict";
exports.__esModule = true;
// クラスやインターフェイス, 変数, 関数を他のモジュールから利用するときは, 
// export キーワードを指定してあげる.
exports.PI = 3.14159;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.area = function (r) {
        return r * r * exports.PI;
    };
    return Circle;
}());
exports.Circle = Circle;
