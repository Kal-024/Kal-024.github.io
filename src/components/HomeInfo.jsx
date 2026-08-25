import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { profile } from "../constants";
import useLanguage from "../hooks/useLanguage";

const HomeInfo = ({ currentStage }) => {
  const { t } = useLanguage();

  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        {t.home.greetingBefore}
        <span className='font-semibold mx-2 text-white'>{profile.name}</span>
        {t.home.greetingAfter}
        {" 👋"}
        <br />
        {t.home.tagline}
      </h1>
    );

  const stage = t.home[`stage${currentStage}`];
  const routes = { 2: "/about", 3: "/projects", 4: "/contact" };

  if (!stage) return null;

  return (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{stage.text}</p>

      <Link to={routes[currentStage]} className='neo-brutalism-white neo-btn'>
        {stage.cta}
        <img src={arrow} alt='' className='w-4 h-4 object-contain' />
      </Link>
    </div>
  );
};

export default HomeInfo;
