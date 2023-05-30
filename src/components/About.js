import { Link } from 'react-router-dom'
import { AiOutlineSwapRight } from 'react-icons/ai'
import DataStructure from '../images/data-structure.png'

const About = ({ hireModalFunc }) => {
    return (
        <>
            <div className='about relative container mx-auto flex w-full text-xl py-24 px-2'>
                <div className='flex flex-col sm:items-baseline items-center sm:text-left text-center z-40'>
                    <h1 className='text-lime-400 daysone-ff'>About Me</h1>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mt-5 md:w-2/3'>I possess the capability that surpass your expectations</h1>
                    <Link className="flex items-center w-max inter-ff px-12 py-4 mt-8 
                    hover:border-lime-500 hover:text-lime-500 ease-in-out duration-100 text-lg border" onClick={hireModalFunc}>Hire me <AiOutlineSwapRight className='ms-2' /></Link>
                </div>

                <img src={DataStructure} alt="image" className='w-72 animate-spin-slow absolute sm:end-0 sm:mx-0 mx-auto sm:start-auto start-0 end-0 opacity-50' />
            </div>

            <div className='container mx-auto flex w-full h-max text-xl inter-ff'>
                <div className='rotate-45 w-40'>
                    <img src={DataStructure} alt="image" className='w-96 opacity-80' />
                </div>

                <span className='text-lg mt-28 ms-auto sm:w-1/2 sm:text-start opacity-75'>
                    Pag yung giraffe uminom ng mainit na tubig, diba dadaan yun muna sa bibig nya
                    kasi nga iinumin nya yung mainit na tubig. Then once na dumaloy na yung mainit na
                    tubig sa bibig nya syempre mag ta-travel pa yun sa mahabang lalamunan niya so it
                    might take several seconds to make its way sa pinaka stomach ng giraffe. So kapag
                    nasa tyan na ng giraffe yung mainit na tubig hindi na mainit yun. Malamig na.
                </span>
            </div>
        </>
    )
}

export default About