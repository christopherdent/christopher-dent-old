import React from 'react';
import ReactDOM from 'react-dom';
import ProjectCard from '../components/ProjectCard'
import ProjectsList from '../components/ProjectsList'
import AboutTable from '../components/AboutTable'
import Testing from '../components/Testing'
import AboutMe from '../components/AboutMe'
import MenuBar from '../components/MenuBar'
import projects from '../project_data.js'
import medata from '../about_data.js'
import { Card, CardGroup, Container, CardColumns, Col, Image, Table } from 'react-bootstrap';



class App extends React.Component {

  constructor() {
    super()
    this.state = { }
  }

  componentDidMount() {
      document.body.style.backgroundColor = "darkgrey"
  }

 listProjects = () => {
  return projects.map((project, index) =>
      <ProjectCard
        key = {index}
        name = {project.name}
        imageUrl= {project.imageUrl}
        appUrl = {project.appUrl}
        demoUrl = {project.demoUrl}
        description = {project.description} />)
    }

  aboutMe = ()  =>  {
    return medata.map((section, index) =>
   <AboutTable
      key={index}
      title= {section.title}
      description= {section.description}
   />)
  }


render() {
  return (

    <div className="App">
      <main>
      <MenuBar />
      <br />
      <center>
    <img src='https://defaultcustomheadersdata.files.wordpress.com/2016/07/city1.jpg?resize=1750,300' />
  <h1 className='page-title'> CHRISTOPHER DENT </h1></center>
      <br /><br /><br />

        <ProjectsList
        listProjects={this.listProjects()}
         />
       <AboutMe
       aboutMe={this.aboutMe()}
       />
      </main>
    </div>
    );
  }
}
export default App;
