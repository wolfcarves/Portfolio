import { AiOutlineSwapRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from './Button'

const Collaboration = () => {
    return (
        <>
            <h1 className="text-lime-500 text-2xl mb-10 daysone-ff">Collaboration</h1>

            <h1 className="text-white xl:text-9xl sm:text-7xl text-6xl daysone-ff">
                Let's talk to <br /> collaboration
            </h1 >
            <div className='flex mx-auto mb-10'>
                <Button path='/' text='Get in touch' />
                <Link to='/projects' className="flex items-center w-max inter-ff px-9 py-4 mt-8 text-white mx-1
                    hover:border-lime-500 hover:text-lime-500 ease-in-out duration-100 text-lg border">Hire me <AiOutlineSwapRight className='ms-2' /></Link>
            </div>

        </>
    )
}

export default Collaboration