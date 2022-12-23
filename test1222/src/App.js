import { Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './page/Board';
import BoardPage from './page/BoardPage';
import BoardWriteForm from './page/BoardWriteForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Board />}></Route>
        <Route path='board/:id' element={<BoardPage />}></Route>
        <Route path='/board/writeform' element={<BoardWriteForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
