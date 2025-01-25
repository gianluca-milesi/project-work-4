import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-slate-600 text-white text-center">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 background  py-7 ">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-blue-600">Lo specialista </span>
                    a portata di click!</h1>
                <div>
                    <a className="sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 focus: text-3xl" href="">LOGO</a>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:px-12 px-4 py-7 mb-5 text-center cursor-pointer">
                <ul>
                    <li className="font-bold underline">FAQ</li>
                    <Link to='/contact'><li className="font-bold underline">Contatti</li></Link>
                    <Link to='/about'><li className="font-bold  underline">About us</li></Link>
                    <li className="font-bold underline">Note legali</li>
                </ul>
                <ul>
                    <li className="font-bold underline">Lavora con noi!</li>
                    <li className="font-bold underline">Privacy</li>
                    <li className="font-bold underline">Termini di servizio</li>
                    <li className="font-bold underline">Sostieni la ricerca</li>
                </ul>
            </div>
            <hr className="mb-10 " />
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 text-center pr-2 test-sm pb-8 justify-center">
                <span>© 2025 Appy. All rights reserved </span>
                <span>Terms. Privacy Policy</span>
                <div className="flex justify-center gap-4 sm:text-center">
                    <a className='text-2xl' href="https://www.facebook.com/p/Jonny-sins-61560479786369/"><FaFacebook /></a>
                    <a className='text-2xl' href="https://www.instagram.com/?hl=en"><FaInstagram /></a>
                    <a className='text-2xl' href="https://x.com/?lang=en&mx=2"><FaXTwitter /></a>
                    <a className='text-2xl' href="https://www.tiktok.com/?lang=en"><FaTiktok /></a>
                    <a className='text-2xl' href="https://www.youtube.com"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;