import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const OrderNow = () => {
    const {user} = useAuth();
    const [product, setProduct] = useState({});
    const {id} = useParams();

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = data => {
        fetch('https://safe-hamlet-38620.herokuapp.com/orderNow', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => { 
            if(result.insertedId){
                alert('welcome Your ordered successfull')
            }
        })
    }

    useEffect( () => {
        fetch(`https://safe-hamlet-38620.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data[0]))
    }, [id])

    return (
        <div className="w-50 mx-auto my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email")}
                        placeholder="Email"
                        defaultValue={user.email}
                        className="p-2 m-2 w-100 input-field"
                    />
                    <input
                        {...register("name")}
                        placeholder="Name"
                        defaultValue={product.name}
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("description")}
                        defaultValue={product.description}
                        placeholder="Description"
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("image", { required: true })}
                        placeholder="Image Link"
                        defaultValue={product.img}
                        className="p-2 m-2 w-100 input-field"
                    />

                    <input
                        {...register("price", { required: true })}
                        placeholder="Price"
                        defaultValue={product.price}
                        type="price"
                        className="p-2 m-2 w-100 input-field"
                    />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input
                        type="submit"
                        value="Order now"
                        className="btn btn-info w-50"
                    />
            </form>
        </div>
    );
};

export default OrderNow;