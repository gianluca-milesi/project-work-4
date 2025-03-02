import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

// ICONE
import { FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5"; // Icona per chiudere il menu
import logo from "/logo.png"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center text-white">
            <NavLink to="/" className='fixedSize'>
                <img
                    src={logo}
                    alt="logo"
                    className="logoSize"
                />
            </NavLink>

            <ul className="hidden md:flex items-center gap-4 font-semibold text-base">
                <NavLink to="/">
                    <li className="p-2 hover:font-bold font-normal rounded-md transition-all cursor-pointer text-xl">
                        Home
                    </li>
                </NavLink>
                <NavLink to="/contact">
                    <li className="p-2 hover:font-bold font-normal rounded-md transition-all cursor-pointer text-xl">
                        Contatti
                    </li>
                </NavLink>
                <NavLink to="/about">
                    <li className="p-2 hover:font-bold font-normal rounded-md transition-all cursor-pointer text-xl">
                        About
                    </li>
                </NavLink>
            </ul>


            <i
                className="bx bx-menu sm:block md:hidden block text-5xl cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                =
            </i>

            {/* Sidebar Mobile */}
            <div
                className={`z-40 fixed sm:block md:hidden top-0 right-0 h-screen w-2/4 bgsecondary flex flex-col items-center font-semibold text-lg transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ transition: 'transform 0.3s ease-in-out' }}
            >
                {/* Pulsante per chiudere il menu */}
                <button
                    className="absolute top-4 right-4 text-4xl text-black"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <IoCloseSharp />
                </button>
                <div className='mt-10'>
                    <Link to="/">
                        <li className="list-none w-full text-center p-4 cursor-pointer text-black border-b border-white flex items-center gap-2 justify-center text-2xl">
                            <FaHome /> Home
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className="list-none w-full text-center p-4 cursor-pointer text-black border-b border-white flex items-center gap-2 justify-center text-2xl">
                            <RiContactsBook2Fill /> Contatti
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="list-none w-full text-center p-4 cursor-pointer text-black border-b border-white flex items-center gap-2 justify-center text-2xl">
                            <FaCircleInfo /> About
                        </li>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
