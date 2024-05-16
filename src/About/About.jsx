import React from "react";
import { Serial } from "../common/serial";

function About() {

    return (
        <>
            <div className="about" id="about">
                <div className="about-crt">
                    <div className="service-1">
                        <Serial serialNo="03" section="About" />
                    </div>
                    <div className="self-intro">
                        <h1>I'm a creative development individual eager to provide imaginative digital resolutions for your needs.</h1>
                        <div className="self-detail">
                            <p>Dynamic and dedicated web developer with a passion for crafting efficient, user-friendly, and visually appealing websites. Proficient in front-end and back-end technologies, I aim to leverage my skills in HTML, CSS, JavaScript, React.JS and Node.JS framework to contribute to innovative web projects.</p>
                        </div>
                        <div className="work">
                            <div className="grid-bx">
                                <p>COMPANY</p>
                            </div>
                            <div className="grid-bx">
                                <p>POSITION</p>
                            </div>
                            <div className="grid-bx">
                                <p>YEAR</p>
                            </div>
                            <div className="grid-bx">
                                <p>TechnoGlobe</p>
                            </div>
                            <div className="grid-bx">
                                <p>Junior Developer</p>
                            </div>
                            <div className="grid-bx">
                                <p>2023</p>
                            </div>
                            <div className="grid-bx">
                                <p>FreeLancing</p>
                            </div>
                            <div className="grid-bx">
                                <p>Junior Developer</p>
                            </div>
                            <div className="grid-bx">
                                <p>2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { About }