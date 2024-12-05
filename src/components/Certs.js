import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/mtcna.jpg"
import alterra from "../assets/certs/alterra.jpg"
import axelbit from "../assets/certs/AxelBitrenew.png"
import dicoding1 from "../assets/certs/sertifikat_course_123_4382228_270924162932.jpg"
// import dicodingJs from "../assets/certs/dicoding-js.png"
// import dicodingNetwork from "../assets/certs/dicoding-network.png"
// import progateHtml from "../assets/certs/progate-htmlcss.png"
// import progateJs from "../assets/certs/progate-js.png"
// import fccResponsive from "../assets/certs/fcc-responsive.png"
import blankalt from "../assets/certs/blank.jpg"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Dicoding Academy" img={dicoding} issued="Dicoding Academy" date="Sep 2024" />
                <CertCard name="Bootcamp Alterra Academy" img={alterra} issued="Alterra Academy" date="Mar 2023" />
                <CertCard name="Mikrotik Certfied Network Associate" img={mtcna} issued="Mikrotik" date="Jul 2019" />
                <CertCard name="Axel Bit Training Centre" img={axelbit} issued="Axel Bit" date="Jan 2020" />
                <CertCard name="Coming Soon" img={blankalt} issued="author" date="Mei 2021" />
                <CertCard name="Coming Soon" img={blankalt} issued="author" date="Jan 2023" />
                <CertCard name="Coming Soon" img={blankalt} issued="author" date="Dec 21" />
                <CertCard name="Coming Soon" img={blankalt} issued="author" date="Oct 2020" />
                <CertCard name="Coming Soon" img={blankalt} issued="author" date="Oct 2020" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
