import { useForm } from "react-hook-form";
import { login, me } from './../Services/API'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Provider/UserProvider';
import { useContext } from 'react';

export default function LoginPage() {

    
    let navigate = useNavigate();

    const { setUser } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setConnected } = useContext(UserContext)


    return (
        <form onSubmit={handleSubmit(async (form) => {
            
            let response = await login(form)
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                let userData = await me()
                setConnected(true)
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