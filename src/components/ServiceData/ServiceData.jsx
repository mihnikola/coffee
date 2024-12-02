// eslint-disable-next-line react/prop-types
const ServiceCard = ({ data, onChange, isOpen }) => {
    // eslint-disable-next-line react/prop-types
    const { id, aosDelay, img, name, description } = data;

    return (
        <div
            id={id}
            onClick={(_) => onChange(_,id)}
            data-aos-delay={aosDelay}
            className="rounded-2xl  bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
        >
            <div className="h-[122px]">
                <img
                    src={img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
            </div>
            <div className="p-4 text-center">
                <div className="w-full"></div>
                <h1 className="text-xl font-bold">{name}</h1>
                <p className={isOpen === id ? "text-gray-500 min-h-[100px] group-hover:text-white duration-high text-sm line-clamp-2" : "text-gray-500  group-hover:text-white duration-high text-sm line-clamp-2"}>
                    {description}
                </p>

            </div>
        </div>
    )
}

export default ServiceCard