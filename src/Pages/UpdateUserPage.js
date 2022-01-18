import { useContext } from "react";
import ChangeUserForm from "../Components/Forms/ChangeUserForm";
import { UserContext } from "../Provider/UserProvider";

export default function UpdateUserPage() {


    const { user } = useContext(UserContext)

    return (

        <div>
            <div>
                <p>Update User</p>
                <p>{user.firstname} - {user.lastname}</p>
            </div>
           <ChangeUserForm></ChangeUserForm>
        </div>
    )

}