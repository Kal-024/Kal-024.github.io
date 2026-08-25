import { Link } from "react-router-dom";

import { profile, socialLinks } from "../constants";
import useLanguage from "../hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © {new Date().getFullYear()} <strong>{profile.fullName}</strong>.{" "}
          {t.footer.rights}
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => {
            const isExternal = link.link.startsWith("http");
            const label = link.id === "contact" ? t.nav.contact : link.name;

            return (
              <Link
                key={link.id}
                to={link.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={label}
              >
                <img
                  src={link.iconUrl}
                  alt={label}
                  className='w-6 h-6 object-contain'
                />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
