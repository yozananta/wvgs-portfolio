import React from 'react';
import HonorCard from "./HonorCard.js"
import hr from "../assets/curve-hr.svg"

export default function Honors(){
    
    const getIndomaretDuration = () => {
        const startDate = new Date('2025-11-03');
        const now = new Date();
        
        let months = (now.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth();
        months += now.getMonth();
        
        const totalMonths = months + 1; 
        
        return `${totalMonths} months`;
    };

    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Experience</h1>
            <p className="font-light text-gray-400">Here are some of my professional accomplishments.</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                
                <HonorCard 
                    name="Backend Developer at Indomaret Group" 
                    issued={`Nov 2025 – Present (${getIndomaretDuration()})`} 
                    desc="Responsible for developing and maintaining scalable backend services, optimizing database performance, and ensuring seamless API integration to support high-traffic retail operations." 
                />

                <HonorCard 
                    name="Internship at Dinas Pariwisata Kota Batu" 
                    issued="Jul 2024 – Sep 2024 (3 months)" 
                    desc="Maintenance and troubleshooting of the cultural database on the website sininja.site and the Cultural Database of Batu City, ensuring optimal performance and data accuracy." 
                />

                <HonorCard 
                    name="Internship at Axel Bit Training Centre" 
                    issued="Jul 2019 – Jan 2020 (7 months)" 
                    desc="Executed a challenging project involving the design and implementation of a LAN network. Scope included cabling, routing, switching, firewalling, and wireless network configuration." 
                />
                
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
