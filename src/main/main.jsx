import React from "react";
import { Home } from "../home/home";
import { Service } from "../service/service";
import { Scroll } from "../ScrollingText/scrolling";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Skills } from "../Skill/Skills";
import { ShortBtn } from "../common/shot";

function Main() {

    return (
        <>
            <Home/>
            <Service />
            <Scroll />
            <Skills />
            <About />
            <Contact />
            <ShortBtn/>
        </>
    )
}

export { Main }