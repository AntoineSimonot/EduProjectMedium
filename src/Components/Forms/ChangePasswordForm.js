import { useForm } from "react-hook-form";
import { updatePassword } from "../../Services/API";


function ChangePasswordForm(params) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(async (form) => {
            await updatePassword(form);
            })}>
            
            <input type="password" {...register("password_old", { required: true })} /> <br />
            {errors.password_old && <span>This field is required</span>} <br />

                
            <input type="password" {...register("password_new", { required: true })} /> <br />
            {errors.password_new && <span>This field is required</span>} <br />

            <input type="password" {...register("password_new_verif", { required: true })} /> <br />
            {errors.password_new_verif && <span>This field is required</span>} <br />

            <input type="submit" /> <br />

        </form>
    )
}

export default ChangePasswordForm;