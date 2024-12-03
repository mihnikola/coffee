import Logo from "../../assets/website/coffee_logo.png";

import coffee from '../../assets/main-menu.png'
import close from '../../assets/main-menu.png'
import { useState } from "react";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];
const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const menuBar = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="w-14" />
              Coffee Cafe
            </a>
          </div>



          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex justify-between items-center gap-4"
          >
            <ul className="hidden md:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>

            {!toggle && <img src={coffee} onClick={menuBar} alt="coffee" className="md:hidden" width="35px" />}
            {toggle && <span className="md:hidden"><svg height="48px" version="1.1" viewBox="0 0 48 48" onClick={menuBar}
              width="48px" xmlns="http://www.w3.org/2000/svg" ><title /><desc />
              <g fill="none" id="Page-1" stroke="none" >
                <g id="Artboard-Copy" transform="translate(-347.000000, -489.000000)">
                  <path d="M379.30719,502.46211 C378.691725,501.84503 377.691798,501.84503 377.077949,502.46211 L371.5,508.036828 L365.923667,502.46211 C365.306587,501.84503 364.308275,501.84503 363.69281,502.46211 L361.461954,504.692966 C360.845682,505.307623 360.845682,506.306743 361.461954,506.921399 L367.03748,512.500156 L361.461954,518.076489 C360.845682,518.693569 360.845682,519.691881 361.461954,520.307345 L363.69281,522.537394 C364.308275,523.154474 365.306587,523.154474 365.923667,522.537394 L371.5,516.961061 L377.077949,522.537394 C377.693413,523.154474 378.691725,523.154474 379.30719,522.537394 L381.538046,520.307345 C382.154318,519.691881 382.154318,518.693569 381.538046,518.076489 L375.96252,512.500156 L381.538046,506.921399 C382.154318,506.306743 382.154318,505.307623 381.538046,504.692966 L379.30719,502.46211 Z" fill="#ffff" id="error1" /><g id="slices" transform="translate(47.000000, 9.000000)" /></g></g></svg>
            </span>
            }

          </div>
          {toggle &&
            <>

              <div className="md:hidden flex flex-col w-full min-h-[200px] justify-start items-center text-center mt-20">
                <ul className="gap-20">
                  {Menu.map((menu) => (
                    <li key={menu.id}>
                      <a
                        href={menu.link}
                        className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            </>
          }
        </div>
      </nav>

    </>
  );
};

export default Navbar;
