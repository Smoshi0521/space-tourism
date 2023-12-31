import Navbar from '@/components/Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Crew() {
  const [spaceData, setSpaceData] = useState<any>([])
  const [crewName, setCrewName] = useState('')
  const [currentCrew, setCurrentCrew] = useState<number>(0)
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/data.json')
      const data = await response.json()
      setSpaceData([...data.crew])
    }
    getData()
  }, [])
  const nextCrew = (name: string, index: number) => {
    setCrewName(name)
    setCurrentCrew(index)
  }
  useEffect(() => {
    setCrewName(spaceData[0]?.name)
  }, [spaceData])

  return (
    <div className='mobile:bg-crew_Mobile pb-[53px] tablet:bg-crew_Tablet desktop:bg-crew_Desktop h-screen bg-cover bg-no-repeat flex flex-col gap-4 overflow-x-hidden tablet:px-0 tablet:pb-[0px]'>
      {
        spaceData.length !== 0 && (
          <Navbar />
        )
      }
      {
        spaceData.length !== 0 && (
          <div className='flex items-center justify-center tablet:justify-start gap-8 relative tablet:pl-10 desktop:px-[185px] tablet:mt-10'>
            <p className='text-[#FFFFFF]/25 font-barlow font-bold text-xl desktop:text-[28px]'>02</p>
            <h2 className='font-barlow text-xl tracking-widest desktop:text-[28px]'>MEET YOUR CREW</h2>
          </div>
        )
      }

      {
        spaceData.length !== 0 && (
          <AnimatePresence>
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }} className='py-0 px-5 flex flex-col gap-5 desktop:h-screen border-red-500 desktop:px-[185px]'>

              {/* Mobile Postion Picture */}
              <div className='tablet:hidden w-full flex justify-center border h-[280px] border-b-gray-500 border-transparent mt-8 relative'>

                <img src={spaceData[currentCrew]?.images?.png} className={`crewSizeMobile tablet:crewSize`} />

              </div>


              <div className='flex flex-col mt-5 items-center gap-10 desktop:flex-row desktop:flex-1 desktop:items-end desktop:mt-0 desktop:justify-between relative'>
                <div className='flex flex-col items-center py-3 tablet:py-0 gap-7 desktop:py-20 desktop:w-auto desktop:h-full desktop:justify-center desktop:gap-[50px]'>

                  {/* Mobile Postion Picture */}
                  <ul className='tablet:hidden w-full flex items-center gap-5 justify-center'>
                    {
                      spaceData?.map((data: any, index: number) => (
                        <li
                          key={index}
                          onClick={() => nextCrew(data?.name, index)}
                          className={`rounded-full  h-3 w-3 transition duration-300 ${crewName === data.name ? "bg-white scale-150" : "bg-gray-400"}`}
                        />
                      ))
                    }
                  </ul>

                  <div className='w-full space-y-3'>
                    <div className='w-full text-center desktop:text-left space-y-3'>
                      <h2 className='text-[#FFFFFF]/50 text-xl tablet:text-[32px] leading-tight'>{spaceData[currentCrew]?.role.toUpperCase()}</h2>
                      <h1 className='text-[25px] tablet:text-[40px] desktop:text-[56px] leading-[50px]'>{spaceData[currentCrew]?.name.toUpperCase()}</h1>
                    </div>
                    <div className='w-full max-w-[600px] desktop:max-w-[600px] desktop:text-left'>
                      <p className='text-paleblue text-lg text-center tablet:text-[20px] desktop:text-left desktop:text-[20px] tracking-widest desktop:leading-[35px]'>{spaceData[currentCrew]?.bio}</p>
                    </div>
                  </div>

                  {/* Tablet to Desktop Postion Circle button */}
                  <ul className='w-full hidden tablet:flex items-center gap-5 desktop:mt-20 justify-center desktop:justify-start '>
                    {
                      spaceData?.map((data: any, index: number) => (
                        <li
                          key={index}
                          onClick={() => nextCrew(data?.name, index)}
                          className={`rounded-full  tablet:h-3 tablet:w-3 desktop:h-4 desktop:w-4 cursor-pointer transition duration-300 ${crewName === data.name ? "bg-white scale-150" : "bg-gray-500"}`}
                        />


                      ))
                    }
                  </ul>
                </div>

                {/* Tablet to Desktop Postion Of Crew Picture */}
                <div className='hidden tablet:flex w-fit justify-center h-full'>
                  <img
                    src={spaceData[currentCrew]?.images?.png}
                    className={`crewSizeMobile tablet:crewSize`} />
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        )
      }
    </div>
  )
}

export default Crew