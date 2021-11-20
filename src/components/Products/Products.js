import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://safe-hamlet-38620.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            <h1 className="my-5">All Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <div className="col">
                    <div className="card">
                      <img src={product.img} style={{height: "300px"}} className="card-img-top w-100" alt="..."/>
                      <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h6>{product.name}</h6>
                            </div>
                            <div className="col-md-6">
                                <p className="text-warning">
                                ${product.price}
                                </p>
                            </div>
                        </div>
                      </div>
                      <Link to={`/order/${product?._id}`}>
                      <button className="btn btn-warning my-3 mx-5">Order Now</button>
                      </Link>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Products;