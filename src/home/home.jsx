import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

function Home() {

    

    return (
        <>
            <div className="home">
                <div className="home-ctr">
                    <div className="head">
                        <h1>A</h1>
                    </div>
                    <div className="main">
                        <div className="main-ctr">
                            <h1>Hey-I'm Azaz</h1>
                            <p>A passionate Web Developer</p>
                            <div className="pro">
                                <h1>JavaScript.</h1>
                                {/* <h1>React/Node.JS </h1> */}
                            </div>
                        </div>
                    </div>
                    <div className="home-abt">
                        <div className="home-abt-lite">
                            <p>Dynamic and dedicated web developer with a passion for crafting efficient, user-friendly, and visually appealing websites. Proficient in front-end and back-end technologies, I aim to leverage my skills in HTML, CSS, JavaScript, React.JS and Node.JS framework to contribute to innovative web projects.</p>
                        </div>
                    </div>
                    <div className="social">
                        <div className="social-ctr">
                            <div className="grey-line"></div>
                            <div className="social-main">
                                <div className="available">
                                    <div className="fadee animate__animated animate__flash animate__infinite animate__slow"></div>
                                    <p>Available for work</p>
                                </div>
                                <div className="or-line"></div>
                                <div className="internet">
                                    <p><FaInstagram /></p>
                                    <p><CiFacebook /></p>
                                    <p><CiLinkedin /></p>
                                    <p><TfiEmail /></p>
                                </div>
                            </div>
                            <div className="grey-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export { Home }