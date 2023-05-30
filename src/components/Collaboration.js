import { AiOutlineSwapRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Collaboration = ({ modalFunc, modalHireFunc }) => {
    const buttonCss = `
        .button {
            position: relative;
            background-color: #06fa47;
        }

        .blocker {
            position: absolute;
            width: 0%;
            height: 100%;
            background: #ffff;
            inset: 0;
            transition: 0.1s linear;
        }

        .button:hover .blocker {
            width: 100%;
        }
        `

    return (
        <>
            <style>{buttonCss}</style>

            <h1 className="text-lime-500 text-2xl mb-10 daysone-ff">Collaboration</h1>

            <h1 className="text-white xl:text-9xl sm:text-7xl text-5xl daysone-ff">
                Let's talk to <br /> collaboration
            </h1 >

            <div className='flex mx-auto mb-10'>
                <button className='button flex items-center px-20 py-8 mt-8 mx-1 inter-ff text-black text-lg' onClick={modalFunc}>

                    <div className="blocker"></div>

                    <span className="absolute inset-0 m-auto h-max whitespace-nowrap font-bold">
                        Get in touch
                    </span>
                </button>

                <Link className="flex items-center w-max inter-ff px-9 py-4 mt-8 text-white mx-1
                    hover:border-lime-500 hover:text-lime-500 ease-in-out duration-100 text-lg border" onClick={modalHireFunc}>Hire me <AiOutlineSwapRight className='ms-2' /></Link>
            </div>

        </>
    )
}

export default Collaboration