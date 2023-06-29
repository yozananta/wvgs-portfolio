import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Long Story Short</h1>
            <p className="font-light text-gray-400">Here are some of my accomplishments.</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Internship at Axel Bit Training Centre" issued="Author" desc=" I had the opportunity to work on a challenging project involving the designing and implementation of a LAN network. The project encompassed various aspects, including cabling, routing, switching, firewalling, and wireless network configuration." />
                <HonorCard name="System Information at Gajayana University in Malang" issued="Author" desc="During my second year of studying,I had the opportunity to further develop my skills and knowledge in various aspects of the field. This included gaining practical experience in implementing HTML, Native PHP, Java, Vue.js, React.js, and Mobile Programming." />
                <HonorCard name="My Academic Journey" issued="author" desc="I have been involved in both internal and external web development projects within the campus environment while pursuing my studies. These projects were undertaken as side ventures alongside my academic commitments. " />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
