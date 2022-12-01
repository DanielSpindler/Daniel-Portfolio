
export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex about-div justify-space">
                <div className="flex-full about-text">
                    <h3 className="gray about-intro">Introduction</h3>
                    <h1 className="white">Hello, I&#39;m Daniel Spindler</h1>
                    <h3 className="white">Every Project is a Chance to improve myself even more</h3>
                    <p className="gray">
                        My Journey to become a Developer started in the Year 2022.
                        I&#39;ve started an Education and was instantly hooked to developing.
                        Right now im mainly using ReactJS and Laravel.
                        My Goal is to never stop learning and to improve in every Field.
                    </p>
                </div>
                <div></div>
            </div>

            <div className="flex partners justify-space">
                {/*<Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety"/>
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty"/>
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik"/>
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy"/>
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy"/>*/}
            </div>
        </section>
    )
}

