// useReducer의 형식과 유사(초기값, 리듀서 함수)
// 초기값
const initalState = {
    number : 0,
    changeNum : 1 // input으로 받기!
}

    // dispatch에 들어갈 {type : "액션"} 객체를 함수로 만들어서 내보내줌
    //<button onClick={dispatch({type : "decrease"})}>감소</button> 여기는 실수 할 확률이 높음
    export const increase = () => ({type : "increase"}) // 리턴값이 객체로 들어가야함
// export const decrease = () => ({type : "decrease"})  감소하는거 

    // 화살표함스도 동일하게 매개변수의 값을 받아올 수 있다
    export const change = (value) => ({type : "change", payload : value}) // 값을 num으로 받아오는거

//리듀서함수
function counter(state = initalState, action
    //useReducer 안에는 state값이랑 action값이 들어감
    ){ 
        switch(action.type) {
            case "increase" : 
                const num = parseInt(state.changeNum)
                console.log(num)
                return {...state, number : state.number+num};
                // 앞에 나머지 값을 가져오고  number는 객체 속성이름 값은 state.number
            case "decrease" :
                return {...state, number : state.number-state.changeNum};
            case "change" :
                return {...state, changeNum : action.payload};
            default : // 다른 값이 들어오면 에러가 뜨기때문에 원래 있던 state값 리턴해줌
                return state;

        }

}

export default counter; //리듀서함수를 내보내주어서 인덱스에서 스토어를 만드는데 사용

// index.js에 연결