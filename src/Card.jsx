import React from "react";
import { NavLink } from "react-router-dom";
import code1 from "../src/Images/code1.png"
import Sdata from "./Sdata";
const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">This is the free course which will help you to strength your skill in this field.</p>
                        <NavLink to="/" className="btn btn-outline-info text-center">Join Now</NavLink>
                    </div>
                </div>
            </div>

        </>
    );

};
export default Card;