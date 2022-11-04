import { useDispatch, useSelector } from "react-redux";
import { increment, incrementAsync, incrementByAmount, incrementByAsync } from "../modules/counter";

const Count = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    return (  
        <div>
            <h1>{count}</h1>
            <button onClick={ () => { dispatch(increment()) } }>+1</button>
            <button 
                // incrementByAmount()의 인수값으로 들어가는 payload로 전달됨
                onClick={ () => {
                dispatch(incrementByAmount(10)) } }>+10</button>

                <button onClick={()=>{dispatch(incrementAsync())}}>1초 뒤 증가</button>
        </div>
    );
}

export default Count;