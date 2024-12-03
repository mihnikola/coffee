import { useState } from "react";
import Img2 from "../../assets/coffee2.png";
import ServiceCard from "../ServiceData/ServiceData";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Espresso is a concentrated coffee beverage that is brewed by forcing hot water through finely-ground coffee beans under high pressure",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "An Americano is a fantastic coffee choice for those who enjoy the flavor of espresso but prefer a larger, milder drink",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "A cappuccino is my perfect morning pick-me-up. The rich espresso flavor, the creamy milk, and that frothy foam on top create the most satisfying drink. It’s the perfect balance every time!",
    aosDelay: "500",
  },
];


const Services = () => {

  const [isOpen, setIsOpen] = useState(null);

  const resizeHandler = (_,id) => {
    setIsOpen(id);
  }

  return (
    <>
      <span id="services"></span>
      <div className="py-10 lg:min-h-[500px]">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center w-full">
            {ServicesData.map((service) => (
              <ServiceCard isOpen={isOpen} onChange={resizeHandler} data={service} key={service.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
