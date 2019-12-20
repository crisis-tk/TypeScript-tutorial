"use strict";
class User2 {
    // コンストラクタ
    constructor(id, password) {
        this.id = id;
        this.password = password;
    }
    // メソッド
    introduce() {
        console.log('id=' + this.id);
        console.log('password=' + this.password);
    }
}
const u2 = new User2('TANAKA', 'hogehoge');
u2.introduce();
