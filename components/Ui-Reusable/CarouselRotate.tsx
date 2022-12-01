import Image, {StaticImageData} from "next/image";
import React, {useState} from "react";

export default function CarouselRotate(): JSX.Element {
    const [items] = useState([{
        title: 'Laravel',
        iconPath: '/icons/design.svg',
        description: 'I create many different Laravel Projects',
        projects: 8
    },
        {
            title: 'Web Design',
            iconPath: '/icons/code.svg',
            description: 'I develop Front-End with ReactJS',
            projects: 4
        },
        {
            title: 'Mobil',
            iconPath: '/icons/phone.svg',
            description: 'id love to try some Projects in the Future!',
            projects: 0
        }
    ])
    return (
        <div className="container">
            <div className="carousel">
                {items.map((item, key) => {
                    return (
                        <div className="carousel__face" key={key}>
                            <span>
                            <AboutCard key={key} title={item.title} icon={item.iconPath}
                                       description={item.description} projects={item.projects}/>
                            </span>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard({title, icon, description, projects}: Props) {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title}/>
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}