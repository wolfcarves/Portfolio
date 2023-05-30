
const Alert = () => {
    return (
        <div className={`fixed inset-0 m-auto max-w-sm h-max bg-neutral-800 text-white rounded-md z-50 font-bold inter-ff`}>

            <div className="relative border-b border-b-neutral-700">
                <h1 className="text-lg text-center py-3 ">Reach me at</h1>

                <button className="absolute end-5 top-0 bottom-0 my-auto" onClick={modalFunc}>
                    <AiOutlineCloseSquare className="text-3xl" />
                </button>
            </div>

            <div className="flex flex-col p-2">
                <Link to='https://www.facebook.com/rodel.crisosto' className="flex items-center hover:bg-neutral-600 py-3 px-2 rounded-lg my-1">
                    <BsFacebook className="text-xl me-2" /><span>Facebook</span>
                </Link>
                <Link to='' className="flex items-center hover:bg-neutral-600 py-3 px-2 rounded-lg my-1">
                    <BsTwitter className="text-xl me-2" /><span>Twitter</span>
                </Link>
                <Link to='https://www.linkedin.com/in/crisosto-rodel-m-undefined-704ba9277/' className="flex items-center hover:bg-neutral-600 py-3 px-2 rounded-lg my-1">
                    <BsLinkedin className="text-xl me-2" /><span>LinkedIn</span>
                </Link>
                <Link to='https://github.com/wolfcarves' className="flex items-center hover:bg-neutral-600 py-3 px-2 rounded-lg my-1">
                    <BsGithub className="text-xl me-2" /><span>Github</span>
                </Link>
            </div>
        </div>
    )
}

export default Alert