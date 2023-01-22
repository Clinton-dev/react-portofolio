import React from "react";
import WorkItem from "./WorkItem";
import projects from '../projects'


function Work() {
  const myWorks = projects.map((project, index) => <WorkItem key={index} project={project}/>)

  return (
    <div id="work">
     <h3>My Work</h3>
     {myWorks}
    </div>
    );
}

export default Work;
