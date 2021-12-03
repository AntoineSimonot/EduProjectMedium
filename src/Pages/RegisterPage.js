import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser } from './../Services/API';

export default function RegisterPage() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    return (
        <form onSubmit={handleSubmit(async (form) => {
            
            let response = await createUser(form)
            if (response.data) {
                navigate('/articles')
            }
            else{
                alert("Wrong email or password")
            }

        })}>

            <input 
                type="email" 
                defaultValue="test@supinternet.fr" 
                {...register("email", { 
                    required: true,  
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                    }
                })} 

            /> <br />
            
            {errors.email && <span>This field is required</span>} <br />



            <input type="firstname" {...register("firstname", { required: true })} /> <br />
            {errors.firsname && <span>This field is required</span>} <br />

            <input type="lastname" {...register("lastname", { required: true })} /> <br />
            {errors.lastname && <span>This field is required</span>} <br />

            <input type="password" {...register("password", { required: true })} /> <br />
            {errors.password && <span>This field is required</span>} <br />

            <input type="password" {...register("password_verif", { required: true })} /> <br />
            {errors.password_verif && <span>This field is required</span>} <br />

            <input type="submit" /> <br />

        </form>
    )

}