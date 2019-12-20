class User {
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
    constructor(private id:string, private password:string) {
    }
    // メソッド
    introduce() {
        console.log('id=' + this.id);
        console.log('password=' + this.password);
    }
}

// Userクラスのオブジェクトをインスタンス化する
const u = new User('TANAKA', 'hogehoge');
// オブジェクトを通じて, Userクラスのメソッドを呼び出す
u.introduce();