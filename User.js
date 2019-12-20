"use strict";
var User = /** @class */ (function () {
    // メソッド
    // private id:string;
    // private password:string;
    // コンストラクタ(-> インスタンス化するときに呼ばれる.)
    // constructor(nm:string, pwd:string) {
    //     this.id = nm;
    //     this.password = pwd;
    // }
    // コンストラクタのショートカット機能
    // -> 上記のメソッド定義、コンストラクタ定義と同じ意味になる.
    //    Angular ではよく使われる書き方！
    function User(id, password) {
        this.id = id;
        this.password = password;
    }
    // メソッド
    User.prototype.introduce = function () {
        console.log('id=' + this.id);
        console.log('password=' + this.password);
    };
    return User;
}());
// Userクラスのオブジェクトをインスタンス化する
var u = new User('TANAKA', 'hogehoge');
// オブジェクトを通じて, Userクラスのメソッドを呼び出す
u.introduce();
