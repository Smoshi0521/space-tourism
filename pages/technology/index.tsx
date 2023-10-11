import Navbar from '@/components/Navbar'
import React from 'react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { space } from 'postcss/lib/list'

function Technology() {
  const [spaceData, setSpaceData] = useState<any>([])
  const [currentTech, setCurrentTech] = useState(0)
  const [techName, setTechName] = useState('')
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/data.json')
      const data = await response.json()
      setSpaceData([...data.technology])
    }
    getData()
  }, [])

  const nextTech = (name: string, index: number) => {
    setTechName(name)
    setCurrentTech(index)
  }
  console.log(spaceData)
  return (
    <div className='mobile:bg-tech_Mobile tablet:bg-tech_Tablet desktop:bg-tech_Desktop h-screen bg-cover bg-no-repeat flex flex-col gap-4 overflow-y-auto overflow-x-hidden desktop:py-8 tablet:px-0 pb-[50px] '>
      {
        spaceData.length !== 0 && (
          <Navbar />
        )
      }

      <div className='flex items-center justify-center tablet:justify-start gap-8 relative tablet:pl-10 desktop:px-[185px] tablet:mt-10'>
        <p className='text-gray-600 font-bold text-xl desktop:text-3xl'>03</p>
        <h2 className='font-barlow text-xl tracking-widest desktop:text-3xl'>SPACE LAUNCH 101</h2>
      </div>

      {/* Container */}
      <AnimatePresence>
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full flex flex-col items-center gap-5 mt-5'>

          {/* Image */}
          <div className='w-full desktop:hidden'>
            <img src={spaceData[currentTech]?.images.landscape} className='w-full' />
          </div>

          {/* Container for desktop */}

          <div className='flex flex-col gap-5 desktop:flex-row desktop:items-center desktop:gap-10 desktop:pl-20 w-full desktop:justify-between '>

            <div className='flex flex-col gap-10 items-center desktop:flex-row '>
              {/* The next buttons */}
              <div className='flex items-center gap-4 justify-center desktop:flex-col mt-5  desktop:mt-0'>
                {
                  spaceData.map((data: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => nextTech(data.name, index)}
                      className={`rounded-full h-10 w-10 flex items-center justify-center tablet:h-16 tablet:w-16 desktop:w-20 desktop:h-20 transition duration-300  ${index === currentTech ? 'bg-white text-black' : 'text-white bg-transparent border border-gray-500'}`}
                    >
                      <p className={`font-bellafair tablet:text-2xl desktop:text-3xl ${index === currentTech ? 'text-black' : 'text-white '}`}>{index + 1}</p>
                    </button>
                  ))
                }
              </div>

              <div className='flex flex-col gap-5 tablet:gap-5  border-red-500 desktop:w-[600px]'>
                {/* Technology Names and Title */}
                <div className='flex flex-col items-center w-full  text-center desktop:w-fit desktop:items-start'>
                  <p className='text-paleblue text-md tracking-widest font-barlow tablet:text-lg  desktop:text-xl'>THE TERMINOLOGY...</p>
                  <p className='text-[25px] font-bellafair text-white tablet:text-[40px] desktop:text-[60px] desktop:text-left'>{spaceData[currentTech]?.name.toUpperCase()}</p>
                </div>

                {/* Technology Description */}
                <div className='px-5 tablet:px-24 desktop:px-0  w-fit'>
                  <p className='text-paleblue text-lg text-center desktop:text-left desktop:text-2xl'>{spaceData[currentTech]?.description}</p>
                </div>
              </div>
            </div>

            {/* Image postion in desktop */}
            <div className='w-full hidden desktop:block desktop:w-fit  border-red-500'>
              <img src={spaceData[currentTech]?.images.portrait} className='w-full desktop:min-w-[30rem] desktop:max-w-[30rem]' />
            </div>

          </div>
        </motion.div>
      </AnimatePresence>


    </div >
  )
}

export default Technology