import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리덕스 프로바이더 추가 -> 값 전달 
import { Provider } from "react-redux"
// store를 만들기 위한 createStore 추가 :redux
import { createStore } from 'redux'; // 줄이 있는 이유: 리덕스툴깃? 그거써달라고
// store에 추가할 counter state와 action
import counter from './modules/counter';
// rootReducer를 통해 한번에 묶어서 사용가능
import rootReducer from './modules';

// createStore를 이용하여 store 생성 
// -> state, dispatch 만들어서 값 전달 할 컴포넌트를 만들어줌 
const store = createStore(rootReducer) // => 두가지 리덕스모듈을 묶어서 보내줌

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App
     // 감싼다!
     /> 
    </Provider>
  </React.StrictMode>
);

// app을 감쌀 수 있도록 index에 작성!!

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
