import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
function Project(){

  const project = [
    {
      title: "Portfolio website",
      description: ` A personal website to showcase my work
                     lorem  ipsum dolor sit amet, consectetur adipiscing elit. 
                     lorem ipsum dolor sit amet, consectetur adipiscing elit`,
      link: "#",
    },

    {
      title:"Todo App",
      description:`A simple and intuitive todo list application.lorem ipsum dolor sit amet,
                   consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.  
                   lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      link:"#"        
    },

    {
      title:"Blog Platform",
      description:`A platform to share articles and tutorials.
                   lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      link:"#"
    },

    {
      title:"Rgpv Result Retrival Bot",
      description:`A bot to retrieve RGPV results using Puppeteer. lorem ipsum dolor sit amet,
                   consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      link:"#"
    },

    {
      title:"Currency Converter",
      description:`A web application to convert currencies in real-time.
                   lorem ipsum dolor sit amet,consectetur adipiscing elit. 
                   lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      link:"#"
    }

  ];
    return (
      <>
        <Header />
        <div id="#projects" className="bg-indigo-200 p-8 h-full">
          <h1 className="font-serif text-4xl font-bold text-center mb-6">
            My Projects
          </h1>

          <div className="flex flex-col items-center grid grid-rows-1 md:grid-cols-3 lg:grid-rows-1 gap-5 p-1">
            { project.length && project.map((pro, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={pro.title}
                  description={pro.description}
                  link={pro.link}
                />
              );
            })}
          </div>
          <Footer />
        </div>
      </>
    );
}
export default Project;