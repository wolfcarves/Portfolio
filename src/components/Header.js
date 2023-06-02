import { Link } from 'react-router-dom'
import { TbMenu } from 'react-icons/tb'

const Header = ({ scrollToTop, scrollToAbout, showMenu }) => {

    return (
        <div className='container mx-auto fixed start-0 end-0 top-0 flex items-center h-24 z-40'>

            <Link to='/' className="logo text-white text-xl md:border-r-2 px-4" onClick={scrollToTop}>
                RDL
            </Link>

            <nav className='md:block hidden ms-4'>
                <ul className='flex text-white'>
                    <li>
                        <Link to='/' className='flex justify-center mx-3 opacity-40 items-center py-5 w-full hover:text-lime-500 hover:opacity-100 ease-in-out duration-100' onClick={scrollToTop}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <button className='flex justify-center mx-3 opacity-40 py-5 w-full hover:text-lime-500 hover:opacity-100 ease-in-out duration-100' onClick={scrollToAbout}>
                            About
                        </button>
                    </li>
                    <li>
                        <Link to='/websites' className='flex justify-center mx-3 opacity-40 py-5 w-full hover:text-lime-500 hover:opacity-100 ease-in-out duration-100'>
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>

            <button className='text-white md:hidden block ms-auto me-4 text-2xl' onClick={showMenu}>
                <TbMenu />
            </button>

        </div>
    )
}

export default Header