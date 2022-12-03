import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="dark-bg flex justify-space">
            <span className="white">Copyright © {year} <Link
                href="/">Daniel Spindler</Link> - All rights reserved.</span>
            <ul className="flex">
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <Image src="/icons/facebook.svg" className="iconFooter" width={24} height={24}
                               alt="facebook-icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <Image src="/icons/instagram.svg" className="iconFooter" width={24} height={24}
                               alt="instagram-icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" className="iconFooter" width={24} height={24}
                               alt="linkedin-icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/DanielSpindler" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" className="iconFooter" width={24} height={24} alt="github-icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                        <Image src="/icons/youtube.svg" className="iconFooter" width="24" height="24"
                               alt="youtube-icon"/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}