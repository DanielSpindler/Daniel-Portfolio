import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Script from "next/Script";


export default function MyApp({Component, pageProps}: AppProps) {

    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-FBSHT9404G"
                strategy="afterInteractive"/>
            <Script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-FBSHT9404G');
                `}
            </Script>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
}

