import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import useLanguage from "../hooks/useLanguage";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        {t.projects.titleBefore}{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          {t.projects.titleHighlight}
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>{t.projects.intro}</p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => {
          const copy = t.projectItems[project.id];

          return (
            <div className='lg:w-[400px] w-full' key={project.id}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt={copy.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {copy.name}
                </h4>
                <p className='mt-2 text-slate-500'>{copy.description}</p>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <div className='mt-5 flex items-center gap-2 font-poppins'>
                    <Link
                      to={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-600'
                    >
                      {t.projects.repoLink}
                    </Link>
                    <img
                      src={arrow}
                      alt=''
                      className='w-4 h-4 object-contain'
                    />
                  </div>
                ) : (
                  <p className='mt-5 text-sm font-poppins text-slate-400'>
                    {t.projects.privateLabel}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
