import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import reactIcon from "../assets/skills/react.svg"
import lara from "../assets/skills/lara.png"
import mikrotik from "../assets/skills/mikrotik.svg"
import php from "../assets/skills/php.png"
import java from "../assets/skills/java.png"
import hr from "../assets/curve-hr.svg"
import vue from "../assets/skills/vue.png"
import csharp from "../assets/skills/csharp.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const getExperience = (startYear) => {
        const currentYear = new Date().getFullYear();
        const years = currentYear - startYear;
        return years > 0 ? `${years} Years` : "1 Year";
    };

    const skillsData = [
        { name: "C#", img: csharp, startYear: 2025 },
        { name: "Vue", img: vue, startYear: 2022 },
        { name: "React", img: reactIcon, startYear: 2022 },
        { name: "JavaScript", img: javascript, startYear: 2021 },
        { name: "Mikrotik", img: mikrotik, startYear: 2020 },
        { name: "PHP", img: php, startYear: 2021 },
        { name: "Laravel", img: lara, startYear: 2022 },
        { name: "Java", img: java, startYear: 2021 }
    ];

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                    {skillsData.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            name={skill.name}
                            experience={getExperience(skill.startYear)}
                            img={skill.img}
                        />
                    ))}
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}
