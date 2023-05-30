import React from 'react'
import { Link } from 'react-router-dom'
import { BsGlobeAmericas } from 'react-icons/bs'
import { BiMobileAlt, BiArrowBack } from 'react-icons/bi'

const ProjectNav = () => {

    const currentPath = window.location.pathname

    return (
        <nav className='sm:w-max sm:pe-5 daysone-ff'>
            <ul className='flex flex-col h-full'>
                <li className='mb-10'>
                    <Link to='/' className='flex items-center sm:w-64 px-1 sm:py-2 py-5 my-1 rounded-lg'><BiArrowBack className='text-lg me-3'/>Home</Link>
                </li>
                <li>
                    <Link to='/project/websites' className={`flex items-center sm:w-64 px-1 sm:py-2 py-5 my-1 rounded-lg  ${currentPath === '/project/websites' ? 'bg-lime-500 text-black' : ''}`}><BsGlobeAmericas className='text-lg me-3' />Websites</Link>
                </li>
                <li>
                    <Link to='/project/mobiles' className={`flex items-center sm:w-64 px-1 sm:py-2 py-5 my-1 rounded-lg ${currentPath === '/project/mobiles' ? 'bg-lime-500 text-black' : ''}`}><BiMobileAlt className='text-lg me-3' />Mobiles</Link>
                </li>
            </ul>
        </nav>
    )
}

export default ProjectNav