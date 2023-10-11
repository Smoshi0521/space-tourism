import Navbar from '@/components/Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
function Destination() {
  const [spaceData, setSpaceData] = useState<any>([])
  const [destination, setDestination] = useState(0)
  const [currentDestination, setCurrentDestination] = useState('Moon')
  const [hideScroll, setHideScroll] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [deg, setDeg] = useState(0)
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/data.json')
      const data = await response.json()
      setSpaceData([...data.destinations])
    }
    getData()
  }, [])

  const moveDestination = (name: string, index: number) => {
    let currentDeg = deg + 360
    console.log(name)
    setDeg(currentDeg)
    setCurrentDestination(name)
    setHideScroll(true)
    setRotate(true)

    setTimeout(() => {
      setDestination(index)
      setRotate(false)
    }, 300)

    setTimeout(() => {
      if (!rotate) {
        setHideScroll(false)
      }
    }, 1000)

  }


  return (
    <div className='mobile:bg-desti_Mobile tablet:bg-desti_Tablet desktop:bg-desti_Desktop h-screen bg-cover bg-no-repeat flex flex-col gap-4  overflow-x-hidden desktop:py-8 tablet:px-0 pb-[50px]' style={{ overflowY: hideScroll ? 'hidden' : 'auto' }}>
      {
        spaceData.length !== 0 && (
          <Navbar />
        )
      }

      {
        spaceData.length !== 0 && (
          <div className='flex items-center justify-center tablet:justify-start gap-8 relative tablet:pl-10 desktop:px-[185px] tablet:mt-10'>
            <p className='text-gray-600 font-bold text-xl desktop:text-3xl'>01</p>
            <h2 className='font-barlow text-xl tracking-widest desktop:text-3xl'>PICK YOUR DESTINATION</h2>
          </div>
        )
      }

      {
        spaceData.length !== 0 && (
          <div className='w-full flex flex-col items-center px-8 tablet:px-10 gap-10 tablet:mt-3'>

            <AnimatePresence>
              <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col w-full gap-10 desktop:flex-row desktop:items-center desktop:justify-evenly desktop:gap-10'>

                <div className=' w-full flex justify-center relative desktop:w-fit'>
                  <motion.img
                    initial={{ rotate: deg, opacity: 1 }}
                    animate={rotate ? { rotate: deg, opacity: 0.2 } : ''}
                    transition={{ duration: 0.7 }}
                    src={spaceData[destination]?.images?.png} className={`w-full max-w-[300px] desktop:min-w-[300px] desktop:max-w-[400px]`} />
                </div>

                <div className='w-full flex flex-col items-center gap-5 desktop:max-w-[500px]'>

                  <div className='flex flex-row w-full justify-center gap-10 relative desktop:justify-start'>
                    {spaceData.length !== 0 && (
                      spaceData?.map((desti: any, index: number) => (
                        <button
                          key={desti.name}
                          onClick={() => moveDestination(desti?.name, index)}
                          className={`flex flex-col justify-between  ${currentDestination === desti.name && " border-b-white "} `}>
                          <p className='text-paleblue font-barlow text-lg tablet:text-xl desktop:text-2xl'>{desti?.name}</p>
                          <AnimatePresence>
                            {
                              currentDestination === desti.name && (
                                <motion.span
                                  initial={{ width: "0%" }}
                                  animate={{ width: "100%" }}
                                  transition={{ duration: 0.3 }}
                                  className={`bg-white h-[2px] w-full`} />
                              )
                            }
                          </AnimatePresence>
                        </button>
                      ))
                    )}

                  </div>

                  <div className='flex flex-col items-center w-full tablet:max-w-[500px] desktop:max-w-full gap-10'>

                    <div className='w-full flex flex-col items-center desktop:items-start'>
                      <h1 className='text-[50px] desktop:text-[100px]'>{spaceData[destination]?.name.toUpperCase()}</h1>
                      <p className='text-paleblue text-center text-lg desktop:text-left desktop:text-xl'>{spaceData[destination]?.description}</p>
                    </div>
                    <span className='w-full border border-b-gray-700 border-transparent' />
                  </div>

                  <div className='flex flex-col items-center tablet:flex-row tablet:justify-evenly gap-5 desktop:justify-start desktop:gap-20 w-full tablet:max-w-[500px] mt-2 desktop:max-w-full'>
                    <div className='text-center desktop:text-left space-y-2'>
                      <p className='text-paleblue text-lg tracking-wider'>AVG.DISTANCE</p>
                      <p className='font-bellafair text-2xl'>{spaceData[destination]?.distance.toUpperCase()}</p>
                    </div>
                    <div className='text-center desktop:text-left'>
                      <p className='text-paleblue text-lg tracking-wider'>EST.TRAVEL TIME</p>
                      <p className='font-bellafair text-2xl'>{spaceData[destination]?.travel.toUpperCase()}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )
      }
    </div>
  )
}

export default Destination