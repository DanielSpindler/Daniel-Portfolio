import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/" className="title">Daniel Spindler</Link>
            </div>
            <ul className="flex white navlist">
                <li className="green">
                    <Link href="/">{"< Main />"}</Link>
                </li>
                <li className={"green"}>
                    <Link href="/#about">{'< About />'}</Link>
                </li>
            </ul>
        </nav>
    )
}