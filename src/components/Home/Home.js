import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../images/banner.jpeg';
import banner2 from '../../images/banner2.jpeg';
import HomeProducts from './HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-5">
                        <h1>Design Your <br />
                        Comfort Zone</h1>
                        <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                        <Link to="/products"><button className="btn btn-warning">SHOP NOW</button></Link>
                    </div>
                    <div className="col-md-6">
                        <img style={{height: "400px"}} src={banner1} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                        <img style={{width: '250px', marginTop: '-145px', marginLeft: '150px'}} className="rounded" src={banner2} alt="" />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>

            <HomeProducts></HomeProducts>

            <div className="bg-secondary" style={{height: "300px"}}>
                <div className="container my-5 p-5 ">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Custom Furniture <br />
                            Built Only For You</h4>
                        </div>
                        <div className="col-md-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{marginTop: '-110px'}}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="p-3 bg-info rounded">
                        <h3>Mission</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 bg-info rounded">
                        <h3>Vission</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 bg-info rounded">
                        <h3>History</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5" style={{height: "350px"}}>
                <div className="row" style={{marginTop: "150px"}}>
                    <div className="col-md-6">
                        <h2>Join our newsletter and get 20% off</h2>
                        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                    </div>
                    <div className="col-md-6">
                        <div class="input-group" style={{marginTop: "70px"}}>
                            <input type="text" class="form-control" placeholder="Enter Email" aria-label="email" aria-describedby="button-addon2"/>
                            <button class="btn btn-warning" type="button" id="button-addon2">Subcribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;