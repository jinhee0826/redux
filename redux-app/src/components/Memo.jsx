import { useSelector } from "react-redux";

const Memo = () => {
    const memolist = useSelector((state)=>state.memo.memolist)
    return (  
        <div>
            {memolist[0].title}
            {/** 리스트(배열)로 들고 왔기 때문에 인덱스로 들고와야함 */}
        </div>
    );
}

export default Memo;