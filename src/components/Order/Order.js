import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Order = () => {
    const [order, setOrder] = useState({});
    const {id} = useParams();
    useEffect( () => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => setOrder(data[0]))
    }, [id])

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                    <img className="w-100" src={order?.img} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="card-body my-5">
                        <h5 className="card-title">{order?.name}</h5>
                        <h6>{order.price}</h6>
                        <p className="card-text">{order.description}</p>
                        <h6>Available : <span>{order.stock}</span></h6>
                        <h6>SKU : <span>{order.sku}</span></h6>
                        <h6>Brand : <span>{order.brand}</span></h6>
                        <button className="btn btn-warning my-5 px-5">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;