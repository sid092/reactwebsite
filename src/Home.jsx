import React from "react";
import code1 from "../src/Images/code1.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Enhance Your "
                imgsrc={code1}
                visit="/services"
                btname="Get Started" />
        </>
    );

};
export default Home;