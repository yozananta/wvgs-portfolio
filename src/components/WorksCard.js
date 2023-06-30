export default function WorksCard(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-offset="100"
                className="hover:bg-dark w-full h-full py-4 px-4"
            >
                <div className="relative rounded-md overflow-hidden">
                    <img
                        src={props.img}
                        className="w-full h-56 mx-auto object-cover rounded-t-md"
                        alt={props.name}
                    />
                </div>
                <div className="mt-2">
                    <h1 className="font-bold md:text-xl">{props.name}</h1>
                    <p className="font-light md:text-lg">{props.issued}</p>
                    <p className="font-light text-gray-400">{props.desc}</p>
                    <p className="font-light text-gray-400">{props.date}</p>
                </div>
            </div>
        </a>
    );
}
