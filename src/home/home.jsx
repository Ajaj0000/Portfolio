import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { ShortBtn } from "../common/shot";

function Home() {

    return (
        <>
        
            <div className="home" id="hom">
                <div className="home-ctr">
                    <div className="head">
                        <h1>A</h1>
                    </div>
                    <div className="main">
                        <div className="main-ctr">
                            <h1>Hey-I'm Azaz</h1>
                            <p>A passionate Web Developer</p>
                            <div className="pro">
                                <h1>
                                    <TypeAnimation sequence={['JavaScript', 1500, 'React.JS', 1500]} wrapper="span" speed={20} repeat={Infinity} />
                                </h1>
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
                                    <Link to="https://www.instagram.com/ajaj_408/"><p title="Instagram"><FaInstagram /></p></Link>
                                    <Link ><p title="Facebook"><CiFacebook /></p></Link>
                                    <Link to="https://www.linkedin.com/in/ajaj-khan/"><p title="LinkedIn"><CiLinkedin /></p></Link>
                                    <Link to="mailto: ajaj2842@gmail.com"><p title="Email"><TfiEmail /></p></Link>
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