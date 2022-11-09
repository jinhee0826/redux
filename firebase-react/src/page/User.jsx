import { useLocation } from "react-router-dom";

const User = () => {
    const location = useLocation();

    return (  
        <div>
            <h1>유저페이지입니다</h1>
            <p>{location.state.name}</p>
            <p>{location.state.email}</p>
            <img src={location.state.photo} alt="" />
        </div>
    );
}

export default User;