// クラスやインターフェイス, 変数, 関数を他のモジュールから利用するときは, 
// export キーワードを指定してあげる.
export const PI = 3.14159;
export interface Shape {
    area(r:number):number;
}
export class Circle implements Shape {
    area(r:number):number {
        return r*r*PI;
    }
}
