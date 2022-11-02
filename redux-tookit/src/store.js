import {configureStore} from '@reduxjs/toolkit';
import  counterReducer  from './modules/counter'
// ㄴ counter.js에서 " export default counter.reducer " 를 가져온 것
// default로 들고 올때 감싸지 않고 가져옴

// redux에서 createStore과 동일한 역할
// + 모듈이 따로 있다면 combine을 통해서 묶어줘야 하지만, 툴킷에서 기능 통합.
export default configureStore({
    reducer: {
        counter : counterReducer, 
    },
})