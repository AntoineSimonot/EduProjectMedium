import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Provider/UserProvider";
import { me, updateUser } from "../../Services/API";


function ChangeUserForm(params) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setUser } = useContext(UserContext)

    return (
        <form onSubmit={handleSubmit(async (form) => {
                
            await updateUser(form)
            let getUser = await me()
            setUser(getUser.data)


            })}>
            <input type="firstname" {...register("firstname", { required: true })} /> <br />
            {errors.firsname && <span>This field is required</span>} <br />

            <input type="lastname" {...register("lastname", { required: true })} /> <br />
            {errors.lastname && <span>This field is required</span>} <br />

            <input type="birthdate" {...register("birthdate", { required: true })} /> <br />
            {errors.birthdate && <span>This field is required</span>} <br />

            <input type="submit" /> <br />

        </form>
    )
}

export default ChangeUserForm;