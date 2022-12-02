import type {NextPage} from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";

const Home: NextPage = () => {

    const coloredClick = (e: React.MouseEvent) => {
        const element = document.createElement('span');
        element.className = 'circle';
        element.style.left = (e.pageX ) + "px";
        element.style.top = (e.pageY) + "px";

        document.body.append(element)

        setTimeout(() => {
            element.remove()

        }, 900)
    }
    return (
        <>
            <div className={"wrapper"} id="wrapper"  onClick={(e:React.MouseEvent) => {
                coloredClick(e)
            }}>
                <Head>
                    <title>Daniel - Laravel/React Developer</title>
                    <link rel="icon" href=""/>
                    <meta name="author" content="Daniel Spindler"/>
                    <meta name="keywords" content="ReactJS, NextJS, Laravel"/>
                    <meta name="description" content="I am a talented Laravel/React Developer"/>
                    <meta charSet="UTF-8"/>
                    <meta name="theme-color" content="#2D2E32"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta property="og:site_name" content="Daniel - Laravel/React Developer"/>
                    <meta property="og:locale" content="de_DE"/>
                    <title data-rh="true">Daniel - Laravel/React Developer</title>
                    <meta data-rh="true" property="og:type" content="website"/>
                    <meta data-rh="true" property="og:title" content="Daniel - Laravel/React Developer"/>
                    <meta data-rh="true" property="og:image" content=""/>
                </Head>
                <Header/>
                <main>
                    <About/>
                </main>
            </div>
            <Footer/>
        </>
    )
}

export default Home;