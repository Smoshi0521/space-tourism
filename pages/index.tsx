import Image from 'next/image'
import { Inter } from 'next/font/google'
import { design } from '@/styles/style'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
export default function Home() {
  const [pulse, setPulse] = useState(false)
  const [play, setPlay] = useState(false)
  const router = useRouter()
  const pulseEffectDelay = () => {
    setPulse(!pulse)
  }

  const moveNext = () => {
    setPulse(false)
    setTimeout(() => {
      router.push('/destination')
    },500)
  }
  useEffect(() => {
    setPlay(true)
  }, [])

  console.log(play)

  const audioRef = useRef<HTMLAudioElement | null>(null);
  // useEffect(() => {
  //   // Play the audio when the component mounts
  //   const handlePlay = () => {
  //     if (audioRef.current) {
  //       audioRef.current.play().catch(error => {
  //         console.error('Play failed:', error);
  //       });
  //     }
  //   };
  //   if(play){
  //     handlePlay()
  //   }
  // }, [play]);
 
  return (
    <div className='mobile:bg-home_Mobile tablet:bg-home_Tablet desktop:justify-between desktop:bg-home_Desktop h-screen bg-cover bg-no-repeat flex flex-col gap-5 pb-5 overflow-y-auto overflow-x-hidden desktop:py-8 2xl:pb-20 desktop:overflow-y-hidden'>
      {
        play && (
          <Navbar />
        )
      }


      <AnimatePresence>
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }} className='flex flex-col items-center desktop:items-start desktop:flex-row justify-evenly relative desktop:top-[-10px] gap-24 px-8'>

          <div className='w-fit flex flex-col items-center gap-0 mt-20'>
            <p className='text-paleblue text-[18px] tracking-[2px]  text-center  desktop:relative desktop:top-5 desktop:left-0 desktop:text-left w-full max-w-[400px] desktop:text-3xl 2xl:max-w-[550px]'>SO, YOU WANT TO TRAVEL TO</p>

            <h1 className='text-[80px] tablet:text-[130px] tablet:mt-0 desktop:text-left 2xl:text-[180px] px-0 '>SPACE</h1>

            <p className='text-center text-paleblue text-[17px] tracking-[0.5px]  w-full max-w-[400px] desktop:text-left desktop:relative desktop:text-lg 2xl:text-2xl 2xl:max-w-[550px]'>
              {`Let's face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it.
            Well sit back and, realx because we'll give you a truly out of this world experience!`}
            </p>
          </div>

          <div className=' w-full desktop:max-w-[400px] h-full flex items-center desktop:items-end justify-center '>
            <AnimatePresence initial={false}>
              <motion.div
                className='absolute w-[200px] h-[200px] desktop:w-[400px] desktop:h-[400px] flex items-center desktop:items-end justify-center'
              >
                <motion.div
                  key="1"
                  initial={{ backgroundColor: "rgba(255, 255, 255, 0)", scaleX: 0, scaleY: 0 }}
                  animate={!pulse ? { backgroundColor: "rgba(255, 255, 255, 0.2)", scaleX: 1, scaleY: 1 } : { backgroundColor: "rgba(255, 255, 255, 0.2)", scaleX: 1.4, scaleY: 1.4 }}
                  transition={{ duration: 0.2, }}
                  className={`w-[150px] h-[150px] tablet:w-[200px] tablet:h-[200px] desktop:w-[245px] desktop:h-[245px] 2xl:w-[345px] 2xl:h-[345px] rounded-full absolute transition duration-300`} />
                <motion.div
                  key="2"
                  initial={{ backgroundColor: "rgba(255, 255, 255, 0)", scaleX: 0, scaleY: 0 }}
                  animate={!pulse ? { backgroundColor: "rgba(255, 255, 255, 0.2)", scaleX: 1, scaleY: 1 } : { backgroundColor: "rgba(255, 255, 255, 0.2)", scaleX: 1.2, scaleY: 1.2 }}
                  transition={{ duration: 0.15, }}
                  className={`w-[150px] h-[150px]  tablet:w-[200px] tablet:h-[200px] desktop:w-[245px] desktop:h-[245px] 2xl:w-[345px] 2xl:h-[345px] rounded-full absolute transition duration-300`} />
              </motion.div>

            </AnimatePresence>

            <div className='w-[150px] h-[150px] tablet:w-[200px] tablet:h-[200px] desktop:w-[245px] desktop:h-[245px] 2xl:w-[345px] 2xl:h-[345px]  rounded-full flex items-center justify-center z-20'>
              <button onClick={moveNext}
                onMouseEnter={pulseEffectDelay}
                onMouseLeave={pulseEffectDelay}
                className='w-[150px] h-[150px] tablet:w-[200px] tablet:h-[200px] desktop:w-[245px] desktop:h-[245px] 2xl:w-[345px] 2xl:h-[345px]  bg-white rounded-full '>
                <h3 className='text-black text-xl tracking-wider desktop:text-3xl 2xl:text-[50px]'>EXPLORE</h3>
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div >
  )
}
