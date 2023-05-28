import ProjectNav from "./components/ProjectNav"
import { Link } from 'react-router-dom'
import nature from './images/nature.jpg'

const ProjectWebsites = () => {
  return (
    <div className='container mx-auto flex text-white h-screen inter-ff'>
      <ProjectNav />

      <div className="py-8 px-24 grid grid-cols-3 gap-y-10 grow overflow-auto">
        
        <div className='border border-neutral-600 rounded w-80 h-max'>
          <img src={nature} alt="image" className="h-36 w-full object-cover" />
          <div className="px-2 py-5 w-full">
            <h1 className="text-xl font-bold">Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, illum. Quasi pariatur reiciendis sint ullam sit officiis minus repellendus incidunt.</p>

            <div className="flex">
              <button className="px-10 py-1 mt-5 ms-auto bg-neutral-500 rounded">Visit</button>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default ProjectWebsites