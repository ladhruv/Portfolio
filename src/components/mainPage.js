import React from 'react';
import NavBar from "./navBar";
import Title from "./title";

const mainPage = () => {
    return (
        <div>
            <NavBar />
            <Title />
            <div style={{}}>
                <h3 style={{color:"white"}}>Dhruv Lad</h3>
            </div>
        </div>
    );
};

export default mainPage;