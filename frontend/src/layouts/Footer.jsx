import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "/logo.png"

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-600 text-white text-center">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 background  py-7 ">
        <h1 className="lg:text-4xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold">
          <span className="text-blue-600">Lo specialista </span>a portata di
          click!
        </h1>
        <div className="flex justify-center">
          <div className="logoSize">
            <img
              src={logo}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:px-12 px-4 py-7 mb-5 text-center cursor-pointer">
        <ul>
          <li className="font-bold underline">FAQ</li>
          <Link to="/contact">
            <li className="font-bold underline">Contatti</li>
          </Link>
          <Link to="/about">
            <li className="font-bold  underline">About us</li>
          </Link>
          <li className="font-bold underline"><a href="https://www.europarl.europa.eu/legal-notice/it/" target="_blank">Note legali</a></li>
        </ul>
        <ul>
          <Link to='/registration'><li className="font-bold underline">Lavora con noi!</li></Link>
          <li className="font-bold underline"><a href="https://it.wikipedia.org/wiki/Privacy" target="_blank">Privacy</a></li>
          <li className="font-bold underline"><a href="https://it.wikipedia.org/wiki/Termini_di_servizio#:~:text=I%20termini%20di%20servizio%20(oppure,ad%20accettarli%20per%20poterne%20usufruire." target="_blank">Termini di servizio</a></li>
          <li className="font-bold underline"><a href="https://partecipa.telethon.it/donazionionline-new-2/?codiceCampagna=2024_07_ZZW_BL_ADVCPCMARKET&gad_source=1&gclid=Cj0KCQiA4-y8BhC3ARIsAHmjC_G4wq6PIJE9S3kiDOj3AigKJJ8WDkdHCBaTS21jfOLLvmplDKm2cJIaAu6wEALw_wcB" target="_blank">Sostieni la ricerca</a></li>
        </ul>
      </div>
      <hr className="mb-10 " />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 text-center pr-2 test-sm pb-8 justify-center">
        <span>© 2025 Appy. All rights reserved </span>
        <span>Terms. Privacy Policy</span>
        <div className="flex justify-center gap-4 sm:text-center">
          <a
            className="text-2xl"
            href="https://www.facebook.com/p/Jonny-sins-61560479786369/"
          >
            <FaFacebook />
          </a>
          <a className="text-2xl" target="_blank" href="https://www.instagram.com/?hl=en">
            <FaInstagram />
          </a>
          <a className="text-2xl" target="_blank" href="https://x.com/?lang=en&mx=2">
            <FaXTwitter />
          </a>
          <a className="text-2xl" target="_blank" href="https://www.tiktok.com/?lang=en">
            <FaTiktok />
          </a>
          <a className="text-2xl" target="_blank" href="https://www.youtube.com">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
