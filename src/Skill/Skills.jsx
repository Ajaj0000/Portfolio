import React from "react";
import { Serial } from "../common/serial";

function Skills() {

    const skills = [
        {
            id: "1",
            name: 'REACT.JS',
            progress: "55%",
        },
        {
            id: "2",
            name: "JAVASCRIPT",
            progress: "70%"
        },
        {
            id: "3",
            name: "CSS",
            progress: "70%"
        },
        {
            id: "4",
            name: "NODE.JS",
            progress: "30%"
        },
        {
            id: "5",
            name: "H.T.M.L.",
            progress: "80%"
        }
    ]


    return (
        <>
            <div className="skills" id="skill">
                <div className="skill-crt">
                    <div className="service-1">
                        <Serial serialNo="02" section="Skills" />
                    </div>
                    <div className="percent">
                        {
                            skills.map((itm) => {
                                return (
                                    <>
                                        <div className="skil-bar">
                                            <div className="skill-per">
                                                <p style={{ width: itm.progress }} > {itm.name}</p>
                                                <div className="empty-line" style={{ width: `calc(100% - ${itm.progress})` }}></div>
                                            </div>
                                            <h2>{itm.progress}</h2>
                                        </div >
                                    </>
                                )
                            })
                        }


                    </div>
                </div>
            </div >
        </>
    )
}

export { Skills }