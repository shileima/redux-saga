// Generator 函数可以暂停执行
export function* helloSaga(){
    console.log('hello');
    yield 1;
    console.log(1)
    yield 2;
    console.log(2)
}