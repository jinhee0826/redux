// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 추가 ->const auth = getAuth(app); 작성
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH2f0CceivzSKthL9vYyXkbrZDCsx7AqM",
  authDomain: "fir-login-3ef03.firebaseapp.com",
  // 우리는 위에꺼 두개만 씀, 개인키라 다른 곳에서 쓸 수 없음
  projectId: "fir-login-3ef03",
  storageBucket: "fir-login-3ef03.appspot.com",
  messagingSenderId: "1098543814643",
  appId: "1:1098543814643:web:5fe77ed021ef6c55d02486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app); // 작성

// 따로 빼서 저장하고 올려야 함 
