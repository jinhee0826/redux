import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBoard } from "../modules/board";

const BoardPage = () => {
  const {id} = useParams();
  const board = useSelector((state)=>(state.board))
              .find((board)=>board.boardId === parseInt(id))
  
  const naviate = useNavigate();
  const dispatch = useDispatch();
  // 게시물 삭제 후 화면이동
  const onDeleteBoard = (id) => {
    dispatch(deleteBoard(id));
    naviate('/');
  }

  // 수정화면으로 이동
  const toModify = () => {
    naviate('/board/writeform', {state: board})
  }

  return (  
    <div>
      <span>{board.boardId}</span>
      <h3>{board.title}</h3>
      <div>
        <button onClick={toModify} >수정</button>
        <button onClick={()=>{onDeleteBoard(board.boardId)}} >삭제</button>
      </div>
      <div>
        <p>{board.userEmail}</p>
      </div>
      <div>
        <h3>{board.content}</h3>
      </div>
      <div>
        <span>조회수 {board.view} </span>
        <span>좋아요 {board.like} </span>
      </div>
    </div>
  );
}
 
export default BoardPage;