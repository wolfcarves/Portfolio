import { AiOutlineSwapRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Name = ({ scrollToAbout }) => {
    return (
        <div className="text-white my-auto">
            <div className="xl:text-8xl lg:text-7xl text-5xl">
                <span className='text-lime-500'>RODEL</span><br />
                <span className='text-slate-300'>CRISOSTO</span>
            </div>
            <p className="inter-ff mt-8 w-2/3 lg:text-xl opacity-60">
                Hello there! my name is Rodel Crisosto, welcome to my very first personal portfolio. Feel free to explore
            </p>

            <div className='flex mt-8 md:text-lg'>
                <Link
                    className="flex items-center w-max inter-ff md:px-12 px-8 md:py-4 py-2 border 
                hover:border-lime-500 hover:text-lime-500 ease-in-out duration-100" onClick={scrollToAbout}>
                    More <AiOutlineSwapRight className='my-auto text-white ms-1' />
                </Link>

                {/* <Link className="flex items-center w-max inter-ff px-12 py-4 ms-3
                hover:ms-4 ease-in-out duration-300">
                    About me
                </Link> */}
            </div>
        </div>
    )
}

export default Name