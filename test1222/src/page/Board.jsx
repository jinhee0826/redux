import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const boardList = useSelector((state) => state.board);
  const navigate = useNavigate();
  // 제목을 클릭했을 때 이동
  const toBoard = (id) => {
    navigate('/board/' + id)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board) => (
            <tr>
              <td>{board.boardId}</td>
              <td onClick={()=>{toBoard(board.boardId)}} >{board.title}</td>
              <td>{board.userEmail}</td>
              <td>{board.view}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
