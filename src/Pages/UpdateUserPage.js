import { useContext } from "react";
import ChangeUserForm from "../Components/Forms/ChangeUserForm";
import { GarbageContext } from "../Provider/GarbageProvider";

export default function UpdateUserPage() {


    const { user } = useContext(GarbageContext)

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