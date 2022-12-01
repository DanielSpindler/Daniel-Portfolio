import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import CarouselRotate from "./Ui-Reusable/CarouselRotate";

export default function Header() {
    return (
        <header>
            <NavBar/>
            <div className="header flex light-bg">
                <div>
                    <button>Laravel/React Developer</button>
                    <h1 className="white">I&apos;d rather code</h1>
                    <h1 className="white">instead of Talking!</h1>
                    <p className="gray">Give me the Opportunity and i will create something Awesome!</p>
                    <a className="green" href="mailto:bewerbung@daniel-spindler.de">Write me a Mail!</a>
                </div>
                <div>
                    <CarouselRotate/>
                </div>
                <div>
                    <Image src="/images/ThatsMe.png" width={500} height={350} alt="daniel"/>
                </div>
            </div>
        </header>
    )
}