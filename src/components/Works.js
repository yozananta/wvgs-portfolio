import WorksCard from "./WorksCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/mtcna.jpg"
import blankalt from "../assets/certs/blank.jpg"
import gooseflix from "../assets/works/works1.png"

// import 

export default function Works(){
    return (
        <div id="works" className="mt-4 text-white" style={{ marginTop: '100px' }}>
            <h1 className="text-2xl font-bold">My Recent Works</h1>
            <p className="font-light text-gray-400">Here are some of my recent Projects</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
            <WorksCard name="GooseFlix" img={gooseflix} 
            issued="A movie search website with a comprehensive database of films, including titles, rating , and release dates." 
            date="Jun 2023" href="https://gooseflix.vercel.app/" />
                <WorksCard name="Coming Soon" img={blankalt} issued="author" date="Oct 2020" />
                <WorksCard name="Coming Soon" img={blankalt} issued="author" date="Oct 2020" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
            </div>
    )
}
