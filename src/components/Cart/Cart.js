import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [allOrders, setAllorder] = useState([]);

    useEffect( () => {
        fetch('https://safe-hamlet-38620.herokuapp.com/allOrder')
        .then(res => res.json())
        .then(data => setAllorder(data))
    }, [])

    const handleDelete = id => {
        const sure = window.confirm('Are you sure, you want to order delete')
        if(sure){
          fetch(`https://safe-hamlet-38620.herokuapp.com/allOrder/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => { 
          if(data.deletedCount){
            alert('order delete successfully')
          }
        })
        }
      }


    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image url</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                {allOrders?.map((order, index) => ( 
                <tbody key={order._id}>
                    <tr>
                    <td>{index}</td>
                    <td>{order.name}</td>
                    <td>{order.description}</td>
                    <td>{order.image}</td>
                    <td>
                    </td>
                    <button onClick={ () => handleDelete(order._id)} className="btn bg-danger p-2">Delete</button>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
    );
};

export default Cart;