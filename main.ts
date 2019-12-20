// 他のモジュールで定義したものを使う場合は import キーワードを使う.
// 指定する際は拡張子は除く
import {Circle} from './circle';

const c = new Circle();
console.log( c.area(10));