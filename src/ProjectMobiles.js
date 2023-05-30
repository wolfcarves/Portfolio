import { Link } from 'react-router-dom'

import ProjectNav from "./components/ProjectNav"
import Project from "./components/Project"

import QuizMobile from './images/quizmobile.jpg'

const ProjectMobiles = () => {


  return (
    <div className='container p-10 mx-auto flex sm:flex-row flex-col text-white inter-ff'>
      <ProjectNav />

      <div className="flex flex-col sm:mt-0 mt-14 sm:px-5 w-full">
        <div className="py-4 w-full">
          <h1 className="font-bold daysone-ff text-3xl text-center mb-5">WEBSITES</h1>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-5 overflow-auto grow">
          <Project imgUrl={QuizMobile} title='QuizIt Mobile' 
          description="This QuizIt Mobile is integrated with my website QuizIt however only student can only signin/signup on mobile.
                      Connecting the two platform was successful and I've done it using http requests. Built using React native/Ionic Framework" />
        </div>
      </div>
    </div>
  )
}

export default ProjectMobiles