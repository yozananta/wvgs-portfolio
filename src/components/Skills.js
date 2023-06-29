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
import android from "../assets/skills/android.png"
import hr from "../assets/curve-hr.svg"
import vue from "../assets/skills/vue.png"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                    
                <SkillCard name="vue" experience="1 years" img={vue} />
                <SkillCard name="react" experience="1 years" img={reactIcon} />
                <SkillCard name="javascript" experience="2 years" img={javascript} />
                <SkillCard name="mikrotik" experience="3 years" img={mikrotik} />
                <SkillCard name="php" experience="2 years" img={php} />
                <SkillCard name="laravel" experience="1 years" img={lara} />
                <SkillCard name="" experience="2 years" img={java} />
                <SkillCard name="android" experience="2 years" img={android} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}