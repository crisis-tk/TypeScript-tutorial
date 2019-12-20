"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
// 入力(=Observableオブジェクト) を作る
const source = rxjs_1.of(1, 2, 3, 4, 5);
// 入力に対してオペレータの操作(=各要素に 10 を足す) を定義する
const example = source.pipe(operators_1.map(val => val + 10));
// Observableオブジェクトを購読(subscribe)し, 
// 届いたときの振る舞い(=コンソールログに値を出力する)
const subscribe = example.subscribe(val => console.log(val));
const source2 = rxjs_1.from([
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
]);
const example2 = source2.pipe(operators_1.filter(({ age }) => age < 25), operators_1.map(({ name }) => name.toUpperCase()));
const subscribe2 = example2.subscribe(val => console.log(val));
// 実行結果
// $ tsc
// $ node basic_operator.js
// 11
// 12
// 13
// 14
// 15
