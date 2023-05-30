import './fonts/font.css'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Name from './components/Name'
import Man from './images/man.png'
import Languages from './components/Languages'
import About from './components/About'
import Bar from './components/Bar'
import Footer from './components/Footer'
import Collaboration from './components/Collaboration'
import { useEffect, useState } from 'react'
import Menu from './components/Menu'

const Hero = () => {

    const [clientWidth, setClientWidth] = useState(window.innerWidth)


    useEffect(() => {
        window.addEventListener('resize', windowResize)

        return (() => {
            window.removeEventListener('resize', windowResize)
        })
    }, [])

    function windowResize() {
        setClientWidth(window.innerWidth)
    }

    function scrollToTop() {
        const main = document.querySelector('.main')
        main.scrollIntoView({ behavior: 'smooth', })
    }

    function scrollToAbout() {
        const about = document.querySelector('.about')
        about.scrollIntoView({ behavior: 'smooth', })
    }

    return (
        <div className='relative main mx-auto flex flex-col pb-3 w-screen'>

            <div className='lg:container sm:px-5 px-3 flex mx-auto relative overflow-hidden' style={{ height: clientWidth >= '700' ? '1080px' : '850px' }}>
                <Header scrollToTop={scrollToTop} scrollToAbout={scrollToAbout} />
                <Name />
                <Sidenav />
                <img src={Man} className='-z-30 absolute bottom-0 md:translate-x-0 translate-x-1/2 xl:end-20 lg:end-20 end-0 md:mx-0 mx-auto xl:max-w-4xl sm:max-w-3xl max-w-2xl' />
            </div>

            <Menu />

            <div className='flex flex-col mx-auto w-full px-3 bg-black text-white py-28'>
                <Languages />
                <About />
            </div>

            <div className='w-full flex flex-col items-center text-5xl font-bold roboto-ff bg-black overflow-hidden' >
                <Bar />
            </div>

            <div className='flex flex-col text-center mt-24'>
                <Collaboration />
            </div>

            <div className='sm:container flex sm:flex-row flex-col-reverse sm:text-start text-center mx-auto w-full inter-ff mt-5 border-t-2 border-t-neutral-700'>
                <Footer />
            </div>
        </div>
    )
}

export default Hero