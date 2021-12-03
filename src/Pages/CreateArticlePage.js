import React, { useContext, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { GarbageContext } from '../Provider/GarbageProvider';
import { createArticle } from '../Services/API'

export default function CreateArticlePage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { categories } = useContext(GarbageContext)
    
    useEffect(() => {
        console.log(categories)
    }, [categories])

    return (

        <form onSubmit={handleSubmit(async (form) => {
            console.log(form)
            await createArticle(form)
        })}>

            <input type="text" {...register("title", {
                minLength: 5
            })} />
            {errors.title && <span>This field is required</span>} <br />


            <input type="text" {...register("content", {
                minLength: 10
            })} />
            {errors.content && <span>This field is required</span>} <br />

            { <select {...register("article_category_id")}>
                {categories.data.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select> }

            <input type="submit" />

            

        </form>

    )

}