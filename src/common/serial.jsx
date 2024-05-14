import React from "react";

function Serial(props) {
    return (
        <>
            <div className="serial">
                <div className="serial-no">
                    <h1>{props.serialNo}</h1>
                    <p>{props.section}</p>
                </div>
            </div>
        </>
    )
}

export { Serial }