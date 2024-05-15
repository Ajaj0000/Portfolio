import React from "react";
import { Serial } from "../common/serial";
import react from "../image/a8435ccad899023a1e390189eb1ec312.png";
import js from "../image/a8435ccad899023a1e390189eb1ec312.png";
import node from "../image/a8435ccad899023a1e390189eb1ec312.png";
import css from "../image/a8435ccad899023a1e390189eb1ec312.png";

function Service() {

    return (
        <>
            <div className="main-ser" id="pro">
                <div className="servicess">
                    <div className="service-1">
                        <Serial serialNo="0 1" section="Services" />
                    </div>
                    <div className="service-skills">
                        <div className="bx a">
                            <div className="bx-img">
                                <img src={js} alt="img" />
                            </div>
                            <h2>JavaScript</h2>
                            <p>Any application that can be written in JavaScript, will eventually be written in JavaScript.</p>
                        </div>
                        <div className="bx b">
                            <div className="bx-img">
                                <img src={react} alt="img" />
                            </div>
                            <h2>React.JS</h2>
                            <p>Empowering UIs with declarative, efficient, and flexible components for dynamic web experiences.</p>
                        </div>
                        <div className="bx c">
                            <div className="bx-img">
                                <img src={node} alt="img" />
                            </div>
                            <h2>Node.JS</h2>
                            <p>Empowering server-side, where asynchronous programming meets scalability and performance.</p>
                        </div>
                        <div className="bx d">
                            <div className="bx-img">
                                <img src={css} alt="img" />
                            </div>
                            <h2>CSS</h2>
                            <p>Style transforms code into visual poetry, where every line shapes an aesthetic masterpiece.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Service }