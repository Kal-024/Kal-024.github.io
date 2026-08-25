import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { certifications, education, experiences, profile, skills } from "../constants";
import useLanguage from "../hooks/useLanguage";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        {t.about.greetingBefore}{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {profile.name}
        </span>
        {t.about.greetingAfter} 👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>{t.profile.summary}</p>
        <p>
          {t.profile.role} · {t.profile.location}
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>{t.about.skillsTitle}</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  title={`${skill.name} — ${t.skillTypes[skill.typeKey]}`}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>{t.about.experienceTitle}</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>{t.about.experienceIntro}</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => {
              const copy = t.experiences[experience.id];

              return (
                <VerticalTimelineElement
                  key={experience.id}
                  date={copy.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {copy.title}
                    </h3>
                    <p
                      className='text-black-500 font-medium text-base'
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {copy.points.map((point, index) => (
                      <li
                        key={`${experience.id}-point-${index}`}
                        className='text-black-500/50 font-normal pl-1 text-sm'
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>

      <div className='pb-16 flex flex-col'>
        <h3 className='subhead-text'>{t.about.educationTitle}</h3>

        <div className='mt-8 flex flex-col gap-5'>
          {education.map((item) => {
            const copy = t.education[item.id];

            return (
              <div
                key={item.id}
                className='flex items-start gap-4 rounded-xl border border-slate-200 p-5'
              >
                <img
                  src={item.icon}
                  alt={copy.institution}
                  className='w-12 h-12 object-contain'
                />
                <div>
                  <h4 className='font-poppins font-semibold text-lg'>
                    {copy.title}
                  </h4>
                  <p className='text-slate-500'>{copy.institution}</p>
                  <p className='text-slate-400 text-sm'>
                    {copy.date} · {copy.detail}
                  </p>
                </div>
              </div>
            );
          })}

          {certifications.map((item) => {
            const copy = t.certifications[item.id];

            return (
              <div
                key={item.id}
                className='flex items-start gap-4 rounded-xl border border-slate-200 p-5'
              >
                <img
                  src={item.iconUrl}
                  alt={copy.issuer}
                  className='w-12 h-12 object-contain'
                />
                <div>
                  <h4 className='font-poppins font-semibold text-lg'>
                    {copy.name}
                  </h4>
                  <p className='text-slate-500'>{copy.issuer}</p>
                  <p className='text-slate-400 text-sm'>{copy.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
