import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'

const Languages = () => {
    return (
        <div className='container mx-auto flex flex-col items-center h-max text-xl inter-ff'>
            <h1 className='daysone-ff'>Interests</h1>
            <span className='mt-5 opacity-50 text-center xl:text-xl text-lg'>Programming Languages and Frameworks That I Am Currently Engaged in the Process of Learning</span>

            <ul className='flex flex-wrap w-full'>
                <li className='flex flex-col mt-12 justify-center items-center grow py-10 px-8'>
                    <FaReact className='text-3xl text-lime-500' />React
                </li>
                <li className='flex flex-col mt-12 justify-center items-center grow py-10 px-8'>
                    <IoLogoJavascript className='text-3xl text-lime-500' />Javascript
                </li>
                <li className='flex flex-col mt-12 justify-center items-center grow py-10 px-8'>
                    <SiNextdotjs className='text-3xl text-lime-500' />NextJs
                </li>
                <li className='flex flex-col mt-12 justify-center items-center grow py-10 px-8'>
                    <DiMongodb className='text-3xl text-lime-500' />MongoDB
                </li>
                <li className='flex flex-col mt-12 justify-center items-center grow py-10 px-8'>
                    <SiTailwindcss className='text-3xl text-lime-500' />Tailwind
                </li>
            </ul>
        </div>
    )
}

export default Languages