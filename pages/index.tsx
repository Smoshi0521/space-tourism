import Navbar from '@/components/Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
export default function Home() {
  const [pulse, setPulse] = useState(false)
  const [pause, setPause] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  const pulseEffectDelay = () => {
    setPulse(!pulse)
  }


  const moveNext = () => {
    setPulse(true)

    setTimeout(() => {
      setPulse(false)
    }, 800)

    setTimeout(() => {
      router.push('/destination')
    }, 1200)
  }
  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <div className='mobile:bg-home_Mobile relative transition duration-500 h-screen bg-cover bg-no-repeat flex flex-col gap-5 overflow-y-auto overflow-x-hidden tablet:bg-home_Tablet tablet:pb-[90px] desktop:pb-[131px]  desktop:justify-between desktop:bg-home_Desktop'>
      {
        mounted && (
          <Navbar />
        )
      }


      <AnimatePresence>
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }} className='flex flex-col items-center desktop:items-end desktop:flex-row justify-between relative gap-24  desktop:w-full desktop:h-fit desktop:px-[165px]'>

          <div className='w-fit flex flex-col items-center gap-[24px] mt-20 desktop:mt-0 desktop:items-start'>
            <p className='text-paleblue text-[18px] text-center desktop:relative desktop:top-5 desktop:left-0 desktop:text-left w-full max-w-[400px] desktop:text-[28px] 2xl:max-w-[550px] tracking-[4.72px]'>SO, YOU WANT TO TRAVEL TO</p>

            <h1 className='text-[80px] tablet:text-[150px] tablet:mt-0 desktop:text-left desktop:text-[150px] px-0'>SPACE</h1>

            <p className='text-center text-paleblue text-[18px] tracking-[0.5px]  w-full max-w-[400px] desktop:text-left desktop:relative desktop:text-lg 2xl:text-2xl 2xl:max-w-[550px]'>
              {`Let's face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it.
            Well sit back and, realx because we'll give you a truly out of this world experience!`}
            </p>
          </div>

          <div className=' w-full desktop:w-fit desktop:h-fit flex items-center desktop:items-end justify-center'>
            <AnimatePresence initial={false}>
              <motion.div
                className='absolute w-[200px] h-[200px] desktop:w-[400px] desktop:h-[400px] flex items-center desktop:items-end justify-center'
              >
                <motion.div
                  key="1"
                  initial={{ backgroundColor: "rgba(255, 255, 255, 0)", scaleX: 0, scaleY: 0 }}
                  animate={!pulse ? { backgroundColor: "rgba(255, 255, 255, 0.2)", scaleX: 1, scaleY: 1 } : { backgroundColor: "rgba(255, 255, 255, 0.2)", scaleX: 1.4, scaleY: 1.4 }}
                  transition={{ duration: 0.2, }}
                  className={`w-[150px] h-[150px] tablet:w-[200px] tablet:h-[200px] desktop:w-[274px] desktop:h-[274px] rounded-full absolute transition duration-300`} />
                <motion.div
                  key="2"
                  initial={{ backgroundColor: "rgba(255, 255, 255, 0)", scaleX: 0, scaleY: 0 }}
                  animate={!pulse ? { backgroundColor: "rgba(255, 255, 255, 0.2)", scaleX: 1, scaleY: 1 } : { backgroundColor: "rgba(255, 255, 255, 0.2)", scaleX: 1.2, scaleY: 1.2 }}
                  transition={{ duration: 0.15, }}
                  className={`w-[150px] h-[150px]  tablet:w-[200px] tablet:h-[200px] desktop:w-[274px] desktop:h-[274px] rounded-full absolute transition duration-300`} />
              </motion.div>

            </AnimatePresence>

            <div className='w-[150px] h-[150px] tablet:w-[200px] tablet:h-[200px] desktop:w-[274px] desktop:h-[274px] rounded-full flex items-center justify-center z-20'>
              <button onClick={moveNext}
                onMouseEnter={pulseEffectDelay}
                onMouseLeave={pulseEffectDelay}
                className={`${pulse ? "animate-pulse" : ''} w-[150px] h-[150px] tablet:w-[200px] tablet:h-[200px] desktop:w-[274px] desktop:h-[274px] bg-white rounded-full`}>
                <h3 className='text-black text-xl tracking-wider desktop:text-[32px]'>EXPLORE</h3>
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div >
  )
}
