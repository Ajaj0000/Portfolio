import React from "react";
import { Serial } from "../common/serial";
import img1 from "../image/PmAmPS5la32UxZ0qMv30zFXXXw.gif";
import img2 from "../image/9Neqqlkh35UPRLFpem1gG2z8AM.png";
import img3 from "../image/uJf8RN30Ub3A6nFDMfXY8T34Rs.png";

function Service() {

    // const card = [
    //     {
    //         id: "a",
    //         name: "CodesWear",
    //         img: js,
    //         used: "Technology Used",
    //         technology: "React.js, JavaScript, CSS, H.T.M.L",
    //         type: "E-commerce",
    //         detail: "Empower your shopping experience with our cutting-edge e-commerce platform, built on React.js for seamless browsing and lightning-fast transactions",
    //     },
    //     {
    //         id: "b",
    //         name: "QuickFly",
    //         img: js,
    //         used: "Technology Used",
    //         technology: "React.js, JavaScript, CSS, H.T.M.L",
    //         type: "Travel and Tourism",
    //         detail: "Embark on a digital journey with our React.js-powered Travel and Tourism platform, where exploration knows no bounds",
    //     },
    //     {
    //         id: "c",
    //         name: "HexaShop",
    //         img: js,
    //         used: "Technology Used",
    //         technology: "React.js, JavaScript, CSS, H.T.M.L",
    //         type: "E-commerce",
    //         detail: "Discover a visually captivating e-commerce journey, meticulously designed on React.js, with functionality that's just around the corner",
    //     },
    //     {
    //         id: "d",
    //         name: "CodesWear",
    //         img: js,
    //         used: "Technology Used",
    //         technology: "React.js, JavaScript, CSS, H.T.M.L",
    //         type: "E-commerce",
    //         detail: "Empower your shopping experience with our cutting-edge e-commerce platform, built on React.js for seamless browsing and lightning-fast transactions",
    //     },

    // ]

    return (
        <>
            <div className="main-ser" id="pro">
                <div className="servicess">
                    <div className="service-1">
                        <Serial serialNo="0 1" section="Project" />
                    </div>
                    {/* <div className="service-skills">
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
                    </div> */}
                    {/* kjdfjsdlndfh;ncrcunkrncufhfnuhfuierf;ndkjn */}
                    <div className="service-skills">
                        <a href="https://quickfly.netlify.app" target="_blank">
                            <div className="projects1">
                                <div className="pro-top">
                                    <img src={img1} alt="img" />
                                </div>
                                <div className="pro-detail">
                                    <h1>QuickFly</h1>
                                    <span>Travel and Tourism</span>
                                </div>
                            </div>
                        </a>
                        <div className="projects">
                            <div className="pro-lite">
                                <div className="proj">
                                    <a href="https://ajajcodes.netlify.app/" target="_blank">
                                        <div className="pro-img">
                                            <img src={img2} alt="img2" />
                                        </div>
                                        <div className="pro-left-text">
                                            <h1>CodesWear</h1>
                                            <span>E-Commerce</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="proj">
                                    <a href="https://hexashop11.netlify.app/">
                                        <div className="pro-in">
                                            <div className="pro-img">
                                                <img src={img3} alt="img" />
                                            </div>
                                            <div className="pro-left-text">
                                                <h1>HexaShop</h1>
                                                <span>E-Commerce</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href="https://24carate.netlify.app" target="_blank">
                            <div className="projects1">
                                <div className="pro-top">
                                    <img src={img1} alt="img" />
                                </div>
                                <div className="pro-detail">
                                    <h1>24 CARROTS</h1>
                                    <span>Catering & Event</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Service }