import { Link } from 'react-router-dom'
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

const Sidenav = () => {
    return (
        <nav className='md:block hidden ms-auto w-52 bg-gradient-to-l from-zinc-950 ...'>
            <ul className='flex flex-col h-full justify-center text-white text-xl'>
                <li className='xl:my-14 my-7'>
                    <Link target="_blank" to='https://www.messenger.com/t/100036289026538' className='flex opacity-40 items-center py-5 w-full hover:opacity-100 hover:-translate-x-5 ease-in-out duration-300'>
                        <BsFacebook className='me-2 text-3xl' />
                        Facebook
                    </Link>
                </li>
                <li className='xl:my-14 my-7'>
                    <Link target="_blank" to='https://www.linkedin.com/in/crisosto-rodel-m-undefined-704ba9277/' className='flex opacity-40 py-5 w-full hover:opacity-100 hover:-translate-x-5  ease-in-out duration-100'>
                        <BsLinkedin className='me-2 text-3xl' />
                        LinkedIn
                    </Link>
                </li>
                <li className='xl:my-14 my-7'>
                    <Link target="_blank" to='https://github.com/wolfcarves' className='flex opacity-40 py-5 w-full hover:opacity-100 hover:-translate-x-5  ease-in-out duration-100'>
                        <BsGithub className='me-2 text-3xl' />
                        Github
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidenav