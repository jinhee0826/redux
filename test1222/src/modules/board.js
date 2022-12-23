// 초기값
const initalState = [
    {
        boardId : 1,
        userEmail : "grean@naver.com",
        title : "게시물입니다",
        content : "글을 작성하였습니다",
        view : 0,
        like :1,
    },
    {
        boardId : 2,
        userEmail : "grean2@naver.com",
        title : "게시물입니다1",
        content : "작성하였습니다",
        view : 3,
        like :1,
    }
]

// 리듀서 함수
function board (state = initalState, action) {
    switch (action.type) {
        case "deleteBoard" :
            // board의 id값을 들고와서 그 id를 제외한 새로운 배열 
            const newboardList = state.filter(
                (board)=>(board.boardId !== action.payload))
            return newboardList;
        case "ModifyBoard":
            // map을 통해서 원하는 board의 값만 바꿔서 배열 만들어줌
            const modifyboardList = state.map(
                (board)=>(board.boardId === action.payload.boardId 
                    ? action.payload : board))
            return modifyboardList;
        default : 
            return state;
    }
} 

// 액션함수
export const deleteBoard = (id) => 
                        ({type:"deleteBoard", payload:id})
export const ModifyBoard = (board) => ({
    type: "ModifyBoard", payload: board
})

export default board;