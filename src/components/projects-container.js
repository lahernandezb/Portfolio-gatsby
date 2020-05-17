import React from 'react';
import ProjectCard from './projectCard';

const ProjectsContainer = () => {
  const projects = [
    {
      key: '1',
      name: 'Social Network',
      tools: ['React', 'Express.js', 'MongoDB', 'Node.js'],
      description:
        'FullStack app for networking with other developers & UI/UX designers. Members are able to create posts, comments, and friendship requests',
    },
    {
      key: '2',
      name: 'Sparkbox Financial Dashboard',
      tools: ['Sails.js', 'Node.js', 'HTML', 'Sass'],
      description:
        'An MVC app that displays and tracks key performance indicators from third party services. These include forecasted billable hours/revenue, current and forecasted team member availability, and potential clients, phase of sales pipeline & probability of conversion. This app was strategically developed app while assessing client needs at each iteration',
    },
    {
      key: '3',
      name: 'Sparkbox Sparkeats',
      tools: ['Sails.js', 'Node.js', 'HTML', 'Sass'],
      description:
        'Sparkeats is a app where fellow Sparkboxers can leave reviews about their favorite local restuarants. I implemented a complete application redesign through Sass refactoring and componentization',
    },
    {
      key: '4',
      name: 'Go Git CLI',
      tools: ['Node.js', 'GitHub API'],
      description:
        'A CLI tool that automates the generation and configuration of local and remote project repositories.',
    },
  ];

  return (
    <section className="projects">
      <h2 className="projects__header">Featured Work</h2>
      {projects.map(project => (
        <ProjectCard
          name={project.name}
          tools={project.tools}
          description={project.description}
        />
      ))}
    </section>
  );
};

export default ProjectsContainer;
