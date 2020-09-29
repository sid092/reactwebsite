import React from "react";
import code1 from "../src/Images/code1.png";
import { NavLink } from "react-router-dom";


const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-10 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="text-success">{props.name}<strong >Coding Skill </strong>With Us</h1>
                                    <h4 className="my-3 text-secondary">
                                        We are the team of developers which will help you to enhance the coding skill
                                </h4>
                                    <div className="mt-3 tag">
                                        <NavLink to={props.visit} className="btn btn-outline-success ">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Common img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

};
export default Common;