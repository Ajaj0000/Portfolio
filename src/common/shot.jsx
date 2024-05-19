import React, { useRef } from "react";
import { RiHomeLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { RiMenu2Line } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { RiChat3Line } from "react-icons/ri";
import AnchorLink from "react-anchor-link-smooth-scroll";

function ShortBtn(props) {

    const home = useRef(null)

    const iconBtn = [
        {
            id: "a",
            name: <RiHomeLine />,
            title: "Home",
            path: "#hom"
        },
        {
            id: "b",
            name: <GrProjects />,
            title: "Project",
            path: "#pro"
        },
        {
            id: "c",
            name: <RiMenu2Line />,
            title: "Skills",
            path: "#skill"
        },
        {
            id: "d",
            name: <IoPerson />,
            title: "About",
            path: "#about"
        },
        {
            id: "e",
            name: <RiChat3Line />,
            title: "Contact",
            path: "#contact"
        }
    ]

    return (
        <>
            <div className="shot-btn">
                <div className="shot">
                    {
                        iconBtn.map((itm) => {
                            return (
                                <>
                                    <AnchorLink href={itm.path}>
                                        <div className="shot-in" ref={home.current?.scrollIntoView()}>
                                            <p key={itm.id} title={itm.title}>{itm.name}</p>
                                        </div>
                                    </AnchorLink>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export { ShortBtn }