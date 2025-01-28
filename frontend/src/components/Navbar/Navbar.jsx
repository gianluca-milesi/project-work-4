import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

// ICONE
import { FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { MdNewLabel } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5"; // Icona per chiudere il menu

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center text-white py-6 px-8 md:px-32 background">
            <Link to="/">
                <img
                    src="https://cdn.discordapp.com/attachments/1330851292913991683/1333389745950162967/logo.png?ex=67996038&is=67980eb8&hm=875b1b96f6880e33053687359d3e11b2e21532de67d9bfa907e0fa13c666b7d0&"
                    alt="logo"
                    className="logoSize"
                />
            </Link>

            <ul className="hidden lg:flex items-center gap-12 font-semibold text-base">
                <Link to="/">
                    <li className="p-2 hover:bg-green-400 rounded-md transition-all cursor-pointer text-xl">
                        Home
                    </li>
                </Link>
                <Link to="/contact">
                    <li className="p-2 hover:bg-green-400 rounded-md transition-all cursor-pointer text-xl">
                        Contatti
                    </li>
                </Link>
                <Link to="/about">
                    <li className="p-2 hover:bg-green-400 rounded-md transition-all cursor-pointer text-xl">
                        About
                    </li>
                </Link>
            </ul>

            <div className="relative hidden lg:flex items-center gap-2 font-semibold text-base justify-center">
                <button className="py-2 px-5 backgroundTwo text-black rounded-lg focus:bg-slate-300">
                    Log In
                </button>
                <button className="py-2 px-5 backgroundTwo text-black rounded-lg focus:bg-slate-300">
                    Sign Up
                </button>
            </div>

            <i
                className="bx bx-menu lg:hidden block text-5xl cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                =
            </i>

            {/* Sidebar Mobile */}
            <div
                className={`z-40 fixed lg:hidden top-0 right-0 h-screen w-2/4 bgsecondary flex flex-col items-center font-semibold text-lg transform transition-transform ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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

                <div className="mb-20 mt-12">
                    <Link to="https://boroktimes.com/storage/2023/07/channels4_profile-1200x1200.jpeg">
                        <li className="list-none w-full text-center p-4 cursor-pointer text-black border-b border-white flex items-center gap-2 justify-center text-2xl">
                            <CiLogin /> Login
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="list-none w-full text-center p-4 cursor-pointer text-black border-b border-white flex items-center gap-2 justify-center text-2xl">
                            <MdNewLabel /> Registrati
                        </li>
                    </Link>
                </div>
                <div>
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
        </header>
    );
}

export default Navbar;
