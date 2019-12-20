"use strict";
var User2 = /** @class */ (function () {
    // コンストラクタ
    function User2(id, password) {
        this.id = id;
        this.password = password;
    }
    // メソッド
    User2.prototype.introduce = function () {
        console.log('id=' + this.id);
        console.log('password=' + this.password);
    };
    return User2;
}());
var u2 = new User2('TANAKA', 'hogehoge');
u2.introduce();
