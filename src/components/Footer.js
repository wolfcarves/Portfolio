import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col'>
                <p className='text-white my-auto sm:mt-auto mt-5'>
                    I'm hoping that I would land my very first job soon. <br />
                    I am very excited to showoff my skills and experience the real world.
                </p>

                <p className='text-white sm:mt-auto mt-10 opacity-60'>
                    © Rodel Crisosto.All rights reserved 2023
                </p>
            </div>

            <ul className='text-white sm:ms-auto ms-0 my-auto'>
                <li className='py-1'>
                    <Link className='hover:opacity-80'>Facebook</Link>
                </li>
                <li className='py-1'>
                    <Link className='hover:opacity-80'>Twitter</Link>
                </li>
                <li className='py-1'>
                    <Link className='hover:opacity-80'>Linkedin</Link>
                </li>
                <li className='py-1'>
                    <Link className='hover:opacity-80'>Github</Link>
                </li>
            </ul>
        </>
    )
}

export default Footer