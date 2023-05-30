import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <>
            <nav className="absolute inset-0">
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Projects</Link>
                    </li>
                    <li>
                        <Link>Blog</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu