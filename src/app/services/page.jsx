import HeroButton from '@/components/HeroButton'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from '@/components/ui/drawer'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServicePage = () => {
  return (
    <>
   <div className='flex items-center justify-between px-6 md:px-10 py-3 fixed  top-0 left-0 w-full bg-white rounded-b-2xl'>
        <Link href='/' className='text-secondary font-bold '>AA Accounting</Link>
        <div className=' hidden md:flex flex-row items-center gap-6 '>
            <Link href='/'  className='hover:bg-secondary hover:text-white  p-2 rounded-xl font-bold'>Home</Link>
            <Link href='/about'  className='hover:bg-secondary hover:text-white  p-2 rounded-xl font-bold'>About us</Link>
            <Link href='/services'className='hover:bg-secondary hover:text-white p-2 rounded-xl  font-bold'>Services</Link>
            <HeroButton/> 
        </div>
        <div className='block md:hidden'>
                <Drawer>
          <DrawerTrigger>
            <Menu className=' cursor-pointer text-secondary font-extrabold text-lg'/>
          </DrawerTrigger>
          <DrawerContent className='h-[40%]'>
            <div className=' flex   gap-4 flex-col px-6'>
            <Link href='/'  className='hover:bg-secondary hover:text-white font-bold p-2 w-full text-center rounded-xl'>Home</Link>
            <Link href='/about'  className='hover:bg-secondary hover:text-white font-bold p-2 w-full text-center rounded-xl'>About us</Link>
            <Link href='/services'className='hover:bg-secondary hover:text-white font-bold p-2 w-full text-center rounded-xl'>Services</Link>
            <HeroButton/> 
            </div>
            <DrawerFooter>
              <DrawerClose>
               <Button variant="destructive">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
     
      </div>
     <div className=" w-full mt-[5%] md:h-screen py-20" id='service'>
        <h2 className='text-3xl font-bold text-primary text-center py-5 pb-10'>How It Works</h2>
        <div className='flex flex-col  items-center gap-4 '>
          <div className="flex flex-col gap-1 p-3 rounded-2xl border border-secondary shadow-md w-[70%] md:w-[50%] -ml-[20%]">
            <h2 className="text-secondary text-lg font-bold"><span className='text-xl font-extrabold'>1. </span>Assess Your Needs:</h2>
            <p className='text-sm'>
               Tell us what you need—whether it&apos;s full-service accounting or gig workers for specific tasks.
            </p>
        </div>

          <div className="flex flex-col gap-1 p-3 rounded-2xl border border-secondary shadow-md w-[70%] md:w-[50%] ">
            <h2 className="text-secondary text-lg font-bold"><span className='text-xl font-extrabold'>2. </span>Get Matched:</h2>
            <p className='text-sm'>
             We’ll connect you with the right professionals—our in-house team or our trained gig workers.
            </p>
        </div>

          <div className="flex flex-col gap-1 p-3 rounded-2xl border border-secondary shadow-md w-[70%] md:w-[50%]] ml-[20%]">
            <h2 className="text-secondary text-lg font-bold"><span className='text-xl font-extrabold'>3. </span>Flexible Engagement:</h2>
            <p className='text-sm'>
             Hire for a project, a few hours, or on a contract basis—whatever suits your business best.
            </p>
        </div>

        </div>
     </div>
     </>
  )
}

export default ServicePage