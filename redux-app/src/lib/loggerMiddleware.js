
// store : 리덕스에서 가져온 store(state와 dispatch)
// next : dispatch로 넘겨주는 역할
// action : dispatch에서 액션 
const loggerMiddleware = (store) => (next) => (action) => {
    // logger: 액션의 상태를 남겨주는 역할
    console.group(action && action.type);
    console.log("이전상태", store.getState())
    console.log("액션",action);
    // next()를 통해서 액션을 실행해야지만 dispatch가 된다 
    next(action);
    console.log("다음상태", store.getState())
    console.groupEnd();

    // Middleware는 중간에 dispatch 가져와서 넘겨줌..???
}

export default loggerMiddleware;
// 익명함수 안에 익명함수 들어간 형태(화살표->화살표)


// 위의 코드를 풀어 쓴 모습
const loggerMiddlewarefunc = function (store) {
    return function(next) {
        return function(action) {

        }
    }
}