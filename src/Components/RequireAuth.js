import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getToken } from "../Services/API";

function RequireAuth({ children }) {
    let navigate = useNavigate();

    useEffect (() => {
        if (getToken() === null) {
            navigate("/login");
        }
    }, [navigate])

    return children;

}

export default RequireAuth;
  