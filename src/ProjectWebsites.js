import ProjectNav from "./components/ProjectNav"
import Project from "./components/Project"
import { Link } from 'react-router-dom'
import loading from './images/loading.svg'

const ProjectWebsites = () => {
  return (
    <div className='container pt-10 mx-auto flex text-white h-screen inter-ff overflow-hidden'>
      <ProjectNav />

      <div className="flex flex-col">
        <div className="px-24 py-4">
          <h1 className="font-bold daysone-ff text-3xl">WEBSITES</h1>
        </div>

        <div className="py-8 px-24 grid grid-cols-3 gap-10 overflow-auto grow">
          <Project title='Billing Management System' description='Lorem ipsum dolor sit amet, adipisicing elit. Quo eligendi ad officiis rem nemo veritatis consequuntur. Repellat laborum, debitis iure beatae, temporibus ipsa, natus illum ut doloribus laudantium ipsam hic.' />
          <Project title='Billing Management System' description='Lorem ipsum dolor sit amet, adipisicing elit. Quo eligendi ad officiis rem nemo veritatis consequuntur. Repellat laborum, debitis iure beatae, temporibus ipsa, natus illum ut doloribus laudantium ipsam hic.' />
          <Project title='Billing Management System' description='Lorem ipsum dolor sit amet, adipisicing elit. Quo eligendi ad officiis rem nemo veritatis consequuntur. Repellat laborum, debitis iure beatae, temporibus ipsa, natus illum ut doloribus laudantium ipsam hic.' />
          <Project title='Billing Management System' description='Lorem ipsum dolor sit amet, adipisicing elit. Quo eligendi ad officiis rem nemo veritatis consequuntur. Repellat laborum, debitis iure beatae, temporibus ipsa, natus illum ut doloribus laudantium ipsam hic.' />
          <Project title='Billing Management System' description='Lorem ipsum dolor sit amet, adipisicing elit. Quo eligendi ad officiis rem nemo veritatis consequuntur. Repellat laborum, debitis iure beatae, temporibus ipsa, natus illum ut doloribus laudantium ipsam hic.' />
          <Project title='Billing Management System' description='Lorem ipsum dolor sit amet, adipisicing elit. Quo eligendi ad officiis rem nemo veritatis consequuntur. Repellat laborum, debitis iure beatae, temporibus ipsa, natus illum ut doloribus laudantium ipsam hic.' />
        </div>
      </div>
    </div >
  )
}

export default ProjectWebsites