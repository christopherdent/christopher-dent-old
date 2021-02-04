import React from 'react';
import ProjectCard from './ProjectCard'
import ColoredLine from './ColoredLine'
import { Row, CardDeck, Container } from 'react-bootstrap';


const ProjectsList = (props) => {

  return (
    <div>
<ColoredLine color="grey" />
        <h1 className='heading' id='projects'>My Projects</h1>
<br />
           <CardDeck>
             {props.listProjects}
            </CardDeck>

      <ColoredLine color="grey" />
     </div>
   )
 }

export default ProjectsList
