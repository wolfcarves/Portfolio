import { Link } from 'react-router-dom'
import Sidenav from './Sidenav'
import { TbMenu } from 'react-icons/tb'

const Header = ({ scrollToTop, scrollToAbout }) => {

    return (
        <header className='border sm:container sm:left-auto left-0 mx-auto fixed top-0 h-24 flex items-center z-50 w-full'>

            <Link to='/' className="logo text-white text-xl border-r-2 px-4" onClick={scrollToTop}>
                RDL
            </Link>

            <nav className='md:block hidden ms-4'>
                <ul className='flex text-white'>
                    <li>
                        <Link to='/' className='flex mx-3 items-center py-5 w-full text-lime-500 hover:text-lime-500 ease-in-out duration-100' onClick={scrollToTop}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <button className='flex mx-3 opacity-40 py-5 w-full hover:opacity-100 ease-in-out duration-100' onClick={scrollToAbout}>
                            About
                        </button>
                    </li>
                    <li>
                        <Link to='/project/websites' className='flex mx-3 opacity-40 py-5 w-full hover:opacity-100 ease-in-out duration-100'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='/blog' className='flex mx-3 opacity-40 py-5 w-full hover:opacity-100 ease-in-out duration-100'>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>

            <button className='text-white md:hidden block ms-auto me-4 text-3xl'>
                <TbMenu />
            </button>
        </header>
    )
}

export default Header