import React from 'react';
import ProjectCard from './ProjectCard'
import ColoredLine from './ColoredLine'
import { Row, CardDeck, Container } from 'react-bootstrap';


const ProjectsList = (props) => {

  return (
    <div>
<ColoredLine color="steelblue" />
        <h1 className='heading' id='projects'>My Projects</h1>
<br />
<p id='desc'>Check out my portfolio projects from my time at Flatiron School below. Please be patient while they load. App back-ends are all hosted on Heroku, which puts apps to sleep when they aren't being used so you might to wait a minute or even hit 'refresh' if nothing's happening. Trust me, it's worth the wait. For apps that require a login, feel free to make one! Or, login with Google through OAuth where available.</p>
           <CardDeck>
             {props.listProjects}
            </CardDeck>

      <ColoredLine color="steelblue" />
     </div>
   )
 }

export default ProjectsList
