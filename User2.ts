// インターフェイス (-> アクセス修飾子を指定することはできない)
interface UserData {
    id: string;
    password: string;
}

class User2 implements UserData {
    // コンストラクタ
    constructor(public id:string, public password:string) {
    }
    // メソッド
    introduce() {
        console.log('id=' + this.id);
        console.log('password=' + this.password);
    }
}
const u2 = new User2('TANAKA', 'hogehoge');
u2.introduce();