import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getToken } from "../Services/API";

function RequireAuth({ children }) {
    let navigate = useNavigate();

    useEffect (() => {
        if (getToken() === null) {
            console.log("Not logged in");
            navigate("/login");
        }
        else {
            console.log("Logged in");
        }
    }, [navigate])

    return children;

}

export default RequireAuth;
  