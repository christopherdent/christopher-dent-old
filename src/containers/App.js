import React from 'react';
import ProjectCard from '../components/ProjectCard'
import SmallProjectCard from '../components/SmallProjectCard'
import ProjectsList from '../components/ProjectsList'
import SmallProjectsList from '../components/SmallProjectsList'

import AboutTable from '../components/AboutTable'
import AboutMe from '../components/AboutMe'
import MyBlog from '../components/MyBlog'
import MenuBar from '../components/MenuBar'
import Social from '../components/Social'
import projects from '../project_data.js'
import smallprojects from '../small_project_data.js'
import medata from '../about_data.js'
import ColoredLine from '../components/ColoredLine'
import { Image } from 'react-bootstrap';



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
        description = {project.description}
        codeUrl = {project.code}
        code2 = {project.code2}
        />)
    }


    listSmallProjects = () => {
      return smallprojects.map((project, index) =>
          <SmallProjectCard
            key = {index}
            name = {project.name}
            imageUrl= {project.imageUrl}
            appUrl = {project.appUrl}
            description = {project.description}
            codeUrl = {project.code}
            code2 = {project.code2}
         
            />)
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
    <Image src='https://defaultcustomheadersdata.files.wordpress.com/2016/07/city1.jpg?resize=2000,300' fluid />
    <br /><br /><br /><br />
<a href="mailto: christopherdent01@gmail.com">  <h1 className='page-title'> Christopher Dent </h1></a></center>
      <br />
      
<ColoredLine color="steelblue" />
      <ProjectsList
      listProjects={this.listProjects()}
       />

<ColoredLine color="steelblue" />
      <SmallProjectsList
      listSmallProjects={this.listSmallProjects()}
       />

<ColoredLine color="steelblue" />
      <AboutMe
       aboutMe={this.aboutMe()}
       />

<ColoredLine color="steelblue" />
      <MyBlog />
<ColoredLine color="steelblue" />
<center>
      <Social />
</center>
    </main>
      <center><div className='footer'>Copyright © 2021 christopher dent - All Rights Reserved.</div></center>
    </div>
    );
  }
}
export default App;
