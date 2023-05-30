import { Link } from "react-router-dom"
import { AiOutlineCloseSquare } from 'react-icons/ai'


//${!menuState ? 'translate-x-0' : 'translate-x-full'}


const Menu = ({ menuState, showFunc, scrollToTop, scrollToAbout }) => {

    const css = `
            body {
                overflow: hidden;
            }
    `
    
    return (
        <>
            <style>{menuState ? css : ''}</style>

            <nav className={`menu 
                            fixed
                            inset-0
                            w-screen
                            h-screen 
                            overflow-hidden
                            bg-neutral-950
                            duration-300
                            ease-in-out
                            z-50
                            ${menuState ? 'translate-x-0' : 'translate-x-full'}
                            `}>
                <ul className="flex flex-col text-white px-5 py-3">
                    <li className="flex grow">
                        <Link className="ms-auto py-5" onClick={showFunc}>
                            <AiOutlineCloseSquare className="text-4xl" />
                        </Link>
                    </li>
                    <li className="flex grow border mt-2 ps-2">
                        <Link className="grow py-5" onClick={(e) => {
                            showFunc()
                            scrollToTop()
                        }}>Home</Link>
                    </li>
                    <li className="flex grow border mt-2 ps-2">
                        <Link className="grow py-5" onClick={(e) => {
                            showFunc()
                            scrollToAbout()
                        }}>About</Link>
                    </li>
                    <li className="flex grow border mt-2 ps-2">
                        <Link to='project/websites' className="grow py-5">Projects</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu