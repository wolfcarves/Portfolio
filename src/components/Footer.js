import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col'>
                <p className='text-white my-auto sm:mt-auto mt-5'>
                    I'm hoping that I would land my very first job soon. <br />
                    I am so excited to showoff my skills and experience the real world.
                </p>

                <p className='text-white sm:mt-auto mt-10 opacity-60'>
                    © Rodel Crisosto.All rights reserved 2023
                </p>
            </div>

            <ul className='text-white sm:ms-auto ms-0 my-auto'>
                <li className='py-1'>
                    <Link to='https://www.messenger.com/t/100036289026538' className='hover:opacity-80'>Facebook</Link>
                </li>
                <li className='py-1'>
                    <Link to='https://www.linkedin.com/in/crisosto-rodel-m-undefined-704ba9277/' className='hover:opacity-80'>Linkedin</Link>
                </li>
                <li className='py-1'>
                    <Link to='https://github.com/wolfcarves' className='hover:opacity-80'>Github</Link>
                </li>
            </ul>
        </>
    )
}

export default Footer