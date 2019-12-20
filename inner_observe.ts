import {Observable} from "rxjs";

// 試みとして自作のfrom関数を作ってみる
const my_from = function<T>(array:Array<T>):Observable<T> {
    // Observable.createは、Observableのコンストラクタのエイリアスで
    // Observableのオブジェクトを生成する。
    let observable = Observable.create( (observer:any) => {
        try { 
            // observerのnextメソッドで、データを通知し、送信する。
            array.forEach((element)=>{
                if(typeof(element) === 'number' && element > 30) throw "数が大きすぎます"
                observer.next(element)
            });
            // complete関数を呼び、正常に完了したことを通知する
            observer.complete();
        } catch (e) {
            // 例外発生時には
            // error関数を呼び、エラーを通知する
            observer.error(e);
        }
    });
    return observable;
}
// 自作のfrom関数に配列を渡してみる。
let observa:Observable<number> = my_from([10,20,30,40,50]);
// 丁寧に３つの関数をsubscribeに渡してみる例
observa.subscribe(
    value => console.log(value), // データ到着時に呼ばれる関数。next関数
    err  => console.error('エラー:' + err), // エラー発生時に呼ばれる関数。error関数
    () => console.log('処理が完了しました！') // 完了時に呼ばれる関数。complete関数
);
