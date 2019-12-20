// @HelloWorldデコレーターを定義する
function HelloWorld() {
    return function(constructor:Function) {
        console.log('Decorator Call!!');
    };
}

@HelloWorld()
class TargetClass {
    constructor() {
        console.log('Constractor Call!!');
    }
}
const tg = new TargetClass();


// デコーレーターは実験的な仕様
// なのでコンパイルするときにオプション指定(--experimentalDecorators --target ES5)が必要
//
// 実行結果
// $ tsc --experimentalDecorators --target ES5 decorator.ts
// $ node decorator.js
// Decorator Call!!
// Constractor Call!!
