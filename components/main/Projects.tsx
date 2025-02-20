import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/portfolio.png"
          title="Portfoilio Website"
          description="My Portfoilio Website developed using Next JS & Framer Motion"
        />
        <ProjectCard
          src="/kanban_cursorai.png"
          title="Kanban Board"
          description="Built a simple Kanban Board using Cursor and Claude 3.5 Sonnet. Simple features like creating/editing/deleting a task, assigning a task to users and moving the task to different columns was achived using Composer and few manual edits to the code"
          github='https://github.com/abhilashdk2016/kanban-cursorai'
        />
        <ProjectCard
          src="/uptimer.png"
          title="Monitor Services"
          description="Uptimer is a project that monitors services like HTTP, MongoDB, TCP and SSL. Backend server is built using Apollo GraphQL which interacts with Postgres Database. Client side is built using Next JS. Features include creating a new monitor, pausing/deleting/edit an existing monitor."
          link='https://uptimer-client-jnur.onrender.com' github='https://github.com/abhilashdk2016/uptimer-client'
        />
        <ProjectCard
          src="/jira.png"
          title="Jira Clone"
          description="A feature rich Jira app built with Next.js with authentication, user and product management"
          link='http://jira-omega.vercel.app' github='https://github.com/abhilashdk2016/jira' 
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10">
      <ProjectCard
          src="/github-user-search.png"
          title="Github User Search"
          description="A simple app using React, TypeScript, Shadcn/Tailwind, GraphQL to search github users and view some details of the user along with test cases."
          github='https://github.com/abhilashdk2016/github-user-search' 
        />
      <ProjectCard
          src="/form-builder.png"
          title="Form Builder"
          description="Build a drag and drop form builder using Next JS 15, Clerk and Postgres"
          link='https://form-builder-sigma-nine.vercel.app' github='https://github.com/abhilashdk2016/form-builder' 
        />
        <ProjectCard
          src="/abstract.png"
          title="Legal Forms"
          description="A Cloud based React App that was developed to replace the old Desktop Application which
was used to for Creating and Managing Government Forms by Solicitors and Clients in UK. UI is developed using ReactJS and Redux and deployed to Amazon S3 as static sites.
• C# API’s are used to Digitally Submit the forms to Government Gateways."
        />
        <ProjectCard
          src="/abstract.png"
          title="Microservice App in Golang"
          description='Implemented a microservice app using Golang. Deployed the services using Kubernetes'
          github='https://github.com/abhilashdk2016/microservices-with-go'
        />
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10">
        <ProjectCard
          src="/abstract.png"
          title="Implementation of Transactional Outbox Microservice Pattern"
          description='Implemented basics of transactional outbox microservice pattern
• Order service GoLang API generates and inserts an order into orders table and in the same
transaction an event is also inserted into an outbox table.
• Another Golang program will be polling the outbox table periodically and if there are
unprocessed events in outbox table, processes them and marks them as processed'
           github='https://github.com/abhilashdk2016/transactional-outbox-pattern'
        />
        <ProjectCard
          src="/abstract.png"
          title="Ticketing app"
          description='Microservice style Ticketing App. Implemented Event Streaming using NATS Streaming Server. UI is implemented using Next JS. Used Docker and Kubernetes for deploying the app'
          github='https://github.com/abhilashdk2016/ticketing-ms'
        />
        </div>
    </div>
  );
};

export default Projects;