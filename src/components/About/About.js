import React from 'react';
import img from '../../images/banner.jpeg'

const About = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="w-100 h-75" src={img} alt="" />
                </div>
                <div className="col-md-6 my-5">
                    <h1>Our Story</h1>
                    <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                </div>
            </div>
        </div>
    );
};

export default About;