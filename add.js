"use strict";
// 従来型の関数式
// const add = function(x:number, y:number) {
//     return x + y;
// };
// アロー関数形式 (-> 関数の省略記法. 最近はこの書き方が主流)
// const add = (x:number, y:number) => {
//     return x + y ;
// };
// ラムダ式 (-> 関数が一つの return文で構成されている場合は, 更に省略される)
const add = (x, y) => x + y;
// add関数を呼び出してみる
console.log(add(10, 5));
