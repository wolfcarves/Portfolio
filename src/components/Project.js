import nature from '../images/nature.jpg'
import { BsGithub } from 'react-icons/bs'


const Project = ({ title, description }) => {
    return (
        <div className='border border-neutral-600 rounded w-80 h-max'>
            <img src={nature} alt="image" className="h-36 w-full object-cover" />
            <div className="px-2 py-5 w-full">
                <h1 className="text-xl font-bold mb-3">{title}</h1>
                <p className='opacity-75'>{description}</p>

                <div className="flex">
                    <button className="flex items-center px-4 py-1 mt-5 ms-auto
                     hover:bg-neutral-700 bg-neutral-800 duration-100 rounded">
                        <BsGithub className='me-2' />Github
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Project