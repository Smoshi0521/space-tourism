import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)
  const [play, setPlay] = useState(false)
  const music = useRef<HTMLAudioElement | null>(null)
  const router = useRouter()
  const pageName = router.pathname

  const closeMobileNav = () => {
    setMobileNav(!mobileNav)
  }

  const playSound = () => {
    if (music.current) {
      music.current.play();
    }
  }

  const navList = ["/", "DESTINATION", "CREW", "TECHNOLOGY"]
  return (
    <div className='w-full flex items-center justify-between tablet:pr-0 px-8 py-5 h-24 gap-5 relative desktop:mt-[40px]'>
      <audio ref={music} src='/audio/interstellar.mp3'>

      </audio>
      <div onClick={playSound} className='tablet:p-5 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-[48px] h-[48px] hover:animate-spin'><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
      </div>
      <button onClick={closeMobileNav} className='tablet:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
      </button>


      <span className='hidden desktop:block border-[0.5px] border-b-gray-500 border-transparent relative left-12 w-[40%] 2xl:w-[50%] z-10'></span>


      <motion.div
        initial={mobileNav ? { x: 0 } : { x: 300 }}
        animate={mobileNav ? { x: 0 } : { x: 300 }}
        transition={{ duration: 0.3 }}
        className={`bg-gray-100/5 backdrop-blur-xl h-screen w-4/6 top-0 fixed right-0 pl-5 flex flex-col gap-5 z-30 tablet:hidden`} >
        <div className='w-full  flex justify-end h-24'>
          <button onClick={closeMobileNav} className='relative mr-5'>
            <AiOutlineClose className="text-3xl text-paleblue" />
          </button>
        </div>
        <div className='w-full'>
          <ul className='flex flex-col gap-6 w-full'>
            {
              navList.map((nav: string, index: number) => (
                <Link key={nav} href={`${index === 0 ? nav : `/${nav.toLowerCase()}`}`}>
                  <li className={`flex items-center gap-2 tracking-[2.7px] border-[4px] border-transparent ${pageName === `${nav === "/" ? "/" : `/${nav.toLowerCase()}`}` ? "border-r-white" : null}`}>
                    <p className='font-bold'>{`0${index}`}</p>
                    <p className='font-thin'>{nav === "/" ? "HOME" : nav}</p>
                  </li>
                </Link>
              ))
            }
          </ul>
        </div>
      </motion.div>

      <div className='hidden tablet:flex items-center bg-gray-200/5 backdrop-blur-lg h-[96px] w-full tablet:max-w-[400px] desktop:w-full desktop:max-w-[830px]  desktop:min-w-[600px] pl-10'>
        <ul className='w-full flex items-center h-full desktop:desktop:w-[700px] gap-5 desktop:gap-[50px] relative  desktop:justify-evenly '>

          {
            navList.map((nav: string, index: number) => (
              <Link key={nav} href={`${index === 0 ? nav : `/${nav.toLowerCase()}`}`} className='h-full'>
                <li className={`border-[3px] hover:border-b-white ${pageName === `${nav === "/" ? "/" : `/${nav.toLowerCase()}`}` ? "border-b-white" : null} cursor-pointer duration-200 border-transparent h-full flex items-center`}>
                  <div className='flex items-center gap-2'>
                    <p className='tracking-widest tablet:hidden desktop:block text-sm desktop:text-lg font-extrabold'>{`0${index}`}</p>
                    <p className='tracking-widest text-sm desktop:text-lg'>{nav === "/" ? "HOME" : nav}</p>
                  </div>
                </li>
              </Link>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default Navbar