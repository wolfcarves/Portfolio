import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Project = ({ imgUrl, title, description, buttonText, link, disable}) => {
    return (
        <div className='border border-neutral-700 rounded-lg w-80 h-96 flex flex-col overflow-hidden'>
            <img src={imgUrl} alt="image" className="h-36 w-full object-cover" />
            <div className="px-2 py-5 w-full flex flex-col grow">
                <h1 className="text-xl font-bold mb-3">{title}</h1>
                <p className='opacity-75 text-sm'>{description}</p>

                <div className="flex mt-auto">
                    <Link to={link} target="_blank" className={`flex items-center px-4 py-1 mt-auto ms-auto
                     hover:bg-neutral-700 bg-neutral-800 duration-100 rounded ${disable ? 'pointer-events-none' : ''}`}>
                        {buttonText}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project