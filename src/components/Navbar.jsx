import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";
import LanguageSwitcher from "./LanguageSwitcher";
import useLanguage from "../hooks/useLanguage";

const linkClass = ({ isActive }) => (isActive ? "text-blue-600" : "text-black");

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>

      <div className='flex items-center gap-5'>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to='/about' className={linkClass}>
            {t.nav.about}
          </NavLink>
          <NavLink to='/projects' className={linkClass}>
            {t.nav.projects}
          </NavLink>
          <NavLink to='/contact' className={linkClass}>
            {t.nav.contact}
          </NavLink>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
