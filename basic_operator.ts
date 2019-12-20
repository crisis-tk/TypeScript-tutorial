import { of, from, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// 入力(=Observableオブジェクト) を作る
const source:Observable<number> = of(1, 2, 3, 4, 5);
// 入力に対してオペレータの操作(=各要素に 10 を足す) を定義する
const example = source.pipe(
    map( val => val + 10)
    );
// Observableオブジェクトを購読(subscribe)し, 
// 届いたときの振る舞い(=コンソールログに値を出力する)
const subscribe = example.subscribe(val => console.log(val));

// 実行結果
// $ tsc
// $ node basic_operator.js
// 11
// 12
// 13
// 14
// 15