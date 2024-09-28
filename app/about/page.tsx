import React from "react";

const tech_stack = ['HTML/CSS/TailwindCSS', 'JavaScript', 'ReactJs with TypeScript', 'Redux', 'Php', 'Python', 'SQL']

const About = () => {
  return (
    <section className="bg-about-img h-full">
      <div className="px-8 pt-20 pb-16 w-full md:flex">
        <h1 className="text-[#BDBDBD] md:w-1/3 md:px-12 md:py-12 md:text-3xl">
          About Me
        </h1>
        <p className="text-white mt-4 font-bold leading-loose md:mt-0 :w-2/3 md:py-12 md:text-4xl md:leading-[3.2rem]">
          Experienced Frontend Developer creating different full-stack solutions
          that are functional and visually pleasing with modern web
          technologies. I am eager to explore innovative approaches and grow my
          tech stack. Feel free to reach out — I’m open for new, exciting
          opportunities.
        </p>
      </div>
      <div className="px-8 pt-10 pb-16 w-full md:flex">
        <h1 className="text-[#BDBDBD] md:w-1/3 md:px-12 md:py-12 md:text-3xl">
          Tech Stack
        </h1>
        <div className="mt-4">
          {tech_stack.map((tech) => (
            <div className="text-white py-4 border-b border-[#828282]">
              {tech}
            </div>
          ))}
        </div>
        <div className="py-4 text-base bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF)] text-transparent bg-clip-text">
          Always ready for a Tech Adventure
        </div>
      </div>
    </section>
  );
};

export default About;
