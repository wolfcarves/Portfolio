import { Link } from "react-router-dom"
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { AiFillFile, } from 'react-icons/ai'
import Document from '../files/CRISOSTO_CV.docx'

const HireModal = ({ modalState, modalFunc }) => {
    return (
        <>
            <div className={`fixed inset-0 bg-neutral-900 z-50 
                            ${modalState ? 'opacity-50 duration-300' : 'opacity-0 duration-300 pointer-events-none'}`} onClick={modalFunc}></div>

            <div className={`fixed inset-0 m-auto max-w-sm h-max bg-neutral-800 text-white rounded-md z-50 font-bold inter-ff
                             ${modalState ? '-translate-y-0 opacity-100 duration-300' : '-translate-y-8 opacity-0 duration-300 pointer-events-none'}`}>

                <div className="relative border-b border-b-neutral-700">
                    <h1 className="text-lg text-center py-3 font-bold">Download my CV</h1>

                    <button className="absolute end-5 top-0 bottom-0 my-auto" onClick={modalFunc}>
                        <AiOutlineCloseSquare className="text-3xl" />
                    </button>
                </div>

                <div className="flex flex-col p-2">
                    <a href={Document} download className="flex items-center hover:bg-neutral-600 py-3 px-2 rounded-lg my-1">
                        <AiFillFile className="text-xl sm:text-2xl me-2" /><span>Download File</span>
                    </a>
                    
                </div>
            </div>
        </>
    )
}

export default HireModal