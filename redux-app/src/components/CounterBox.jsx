import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change, increase } from "../modules/counter";

const CounterBox = () => {
    // useSlelector를 통해서 state의 원하는 값을 가져올 수 있다
    const number = useSelector((state)=>(state.counter.number)) // => 리덕스모듈을 묶어서 가지고 왔기때문에 counter추가해서 적어야함 "state.counter.number"
    const changeNum = useSelector((state)=>(state.counter.changeNum))
    // 중괄호 없이 적으면 리턴이 되어 count로 들어가게 됨

    // useDispatch를 통해서 사용할 함수를 가져옴
    const dispatch = useDispatch();

    // callback함수를 이용해서 함수 새로 만듦 방지
    const onChange = useCallback((e)=> dispatch(change(e.target.value)),[dispatch])

    return (  
        <div>
            <h1>카운트입니다</h1>
            <h3>{number}</h3>
            <button 
            // dispatch를 통해 {type:"액션"}을 전달해서 사용
            // >>> counter의 리듀서 함수로 가서 액션같은 타입을 찾은 후 실행
            // >>> 객체값을 직접입력할 경우 오타 및 실수가 있을 수 있어
            // 값을 변경하지 않고 사용하기위해 counter에서 가져와서 사용
                // 함수안에 리턴된 함수의 결과값을 적어줌 => increase() 
            onClick={()=>{dispatch(increase())}}>증가</button>
            {/** onClick={()=>{dispatch({type : "increase"})} 이때 
             * counter.js에서 case : "increase"의 값(이름과 동일해야함) */}

            {/** counter의 리듀서 함수를 수정해서 1씩 감소하는 버튼 작성 */}
            <button onClick={()=>{dispatch({type : "decrease"})}}>감소</button>
            {/**  onClick은 반드시 함수를 써야함 -> 익명함수 사용 
             * dispatch도 함순데 ()인에 넣으면 바로 실행하기 때문에 
             * 그리고 객체라서 {type : "decrease"} 이렇게 {} 감싸줘야함 
             */}

            {/* changeNum값을 바꿀 input */}
            <p>{changeNum}</p>
            <input type="text" onChange={(e)=>{ dispatch({type : "change", payload : e.target.value }) }} />
            <input type="text" onChange={(e)=>{ dispatch(change(e.target.value)) }} />
            {/** 익명함수 화살표 함수로 작성시 렌더될때마다 함수를 다시 생성 > callback으로 지정 */ }
            <input type="text" onChange={ onChange }/>
        </div>
        
    );
}

export default CounterBox;