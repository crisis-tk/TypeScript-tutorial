/*
function getMessage(target:string):string {
    const message:string = 'Hello!';
    return message + target;
}
document.body.innerHTML = getMessage('TypeScript');
*/

// 2.13 ジェネリクス（型パラメータ）
// -> 関数・クラス、インターフェイスを汎用的に作るための仕組み.
function getMessage<T extends string | number>(target:T):string {
    const message:string = 'Hello';
    return message + target;
}
document.body.innerHTML = getMessage<string>('TypeScript');

// 現在の関数のままだと以下は実行時エラーになるけど, こういう呼び出し方ができるようになるよ！の例.
document.body.innerHTML = getMessage<number>(5);
