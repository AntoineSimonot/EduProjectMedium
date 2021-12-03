import { useForm } from "react-hook-form";
import { login, me } from './../Services/API'
import { useNavigate } from "react-router-dom";
import { GarbageContext } from '../Provider/GarbageProvider';
import { useContext } from 'react';

export default function LoginPage() {

    let navigate = useNavigate();

    const { setUser } = useContext(GarbageContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(async (form) => {
            
            let response = await login(form)
            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
                let userData = await me()
                setUser(userData.data)
                navigate('/articles')
            }
            else{
                alert("Wrong email or password")
            }

        })}>

            <input 
                type="email" 
                defaultValue="simonotantoine1@gmail.com" 
                {...register("email", { 
                    required: true,  
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                    }
                })} 

            /> <br />
            {errors.email && <span>This field is required</span>} <br />

            <input type="password" {...register("password", { required: true })} /> <br />
            {errors.password && <span>This field is required</span>} <br />

            <input type="submit" /> <br />

        </form>
    )

}