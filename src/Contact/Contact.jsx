import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { Serial } from "../common/serial";
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Contact() {

    return (
        <>
            <div className="contact" id="contact">
                <div className="contact-ctr">
                    <div className="service-1">
                        <Serial serialNo="0 4" section="Contact" />
                    </div>
                    <div className="contact-detail">
                        <h1>Let's Talk</h1>
                        <p className="first-p">Let's unite to forge imaginative interactions that resonate creating a permanent digital impression.</p>
                        <div className="social-main-1">
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
                        <Link to="mailto: ajaj2842@gmail.com">
                            <div className="cont-mail">
                                <p><FaLocationArrow /></p>
                                <h2>Contact</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Contact }