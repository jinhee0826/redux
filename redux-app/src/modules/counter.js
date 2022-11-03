// useReducer의 형식과 유사(초기값, 리듀서 함수)
// 초기값
const initalState = {
    number : 0,
    changeNum : 1 // input으로 받기!
}

    // dispatch에 들어갈 {type : "액션"} 객체를 함수로 만들어서 내보내줌
    //<button onClick={dispatch({type : "decrease"})}>감소</button> 여기는 실수 할 확률이 높음
    export const increase = () => ({type : "increase"}) // 리턴값이 객체로 들어가야함
    export const decrease = () => ({type : "decrease"})  //감소하는거 

    // 화살표함스도 동일하게 매개변수의 값을 받아올 수 있다
    export const change = (value) => ({type : "change", payload : value}) // 값을 num으로 받아오는거


    // 위에는 디스패치를 바로 사용해서 씀
    /**
     * thunk를 사용하요 비동기로 실행하는 액션함수를 만들 수 있다.
     * thunk의 형식을 사용했기 때문에, 바로 dispatch를 사용하는게 아니라
     * 나중에 추가해서 사용할 수 있다
     * thunk 사용형태 : export const 함수이름 = () => (dispatch) => {}
     */
    export const increaseAsync = () => (dispatch) => {
        // 여기서 dispatch는 로고에서 넥스트와 동일하게 작성
        // dispatch를 실행하기 전에 진행 할 내용 작성
        // dispatch를 통해서 액션 실행 
        // : 액션은 매개변수로 들고오지 않았기때문에 객체로 직접입력해주거나 
        // 이미 만들어둔 액션함수를 사용해서 실행

        // 위에 미리 만들어둔 액션함수를 이용해 전달
        setTimeout(()=>{ dispatch(increase()) },1000) // 안에 들어간 내용을 1초 뒤에  실행
    }

    // 2초 뒤 1씩 줄어드는 함수 
    // thunk를 사용해서 비동기 함수인 setTimer 사용 
    export const decreaseAsync = () => (dispatch)=> {
        setTimeout(()=>{dispatch({type : "decrease"})},2000)
        // decrease() 이걸 넣어도 되지만, 액션값을 객체형태로  {type : "decrease"} 전달해도 됨
    }



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