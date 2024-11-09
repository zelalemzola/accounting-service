import React from 'react'
import HeroButton from '@/components/HeroButton'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from '@/components/ui/drawer'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const Aboutpage = () => {
  return (
    <>
    <div className='flex items-center justify-between px-6 md:px-10 py-3 fixed  top-0 left-0 w-full bg-white rounded-b-2xl'>
        <Link href='/' className='text-secondary font-bold '>AskFinancialSolution.</Link>
        <div className=' hidden md:flex flex-row items-center gap-6 '>
            <Link href='/'  className='hover:bg-secondary hover:text-white  p-2 rounded-xl font-bold'>Home</Link>
            <Link href='/about'  className='hover:bg-secondary hover:text-white  p-2 rounded-xl font-bold'>About us</Link>
            <Link href='/services'className='hover:bg-secondary hover:text-white p-2 rounded-xl  font-bold'>Services</Link>
            <HeroButton/> 
        </div>
        <div className='block md:hidden'>
                <Drawer>
          <DrawerTrigger>
           <Menu className='cursor-pointer text-secondary font-extrabold text-lg'/>
          </DrawerTrigger>
          <DrawerContent className='h-[40%]'>
            <div className=' flex   gap-4 flex-col px-6'>
            <Link href='/'  className='hover:bg-secondary hover:text-white font-bold p-2 w-full text-center rounded-xl'>Home</Link>
            <Link href='/about'  className='hover:bg-secondary hover:text-white font-bold p-2 w-full text-center rounded-xl'>About us</Link>
            <Link href='/services'className='hover:bg-secondary hover:text-white font-bold p-2 w-full text-center rounded-xl'>Services</Link>
            <HeroButton/> 
            </div>
            <DrawerFooter className='px-6'>
              <DrawerClose>
              <Button variant="outline" className='w-full'>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
     
      </div>
    <div className='bg-white h-screen w-full mt-[5%] py-20' id='about'>
        <div className='flex flex-col md:flex-row  w-full pb-10'>
        <div className='md:w-1/2 px-8 '>
      <h1 className='text-primary text-xl font-bold text-start py-9'>Why Work With Us</h1>
      <p className='p-3 rounded-2xl border border-secondary shadow-md'>Welcome to Ask Financial Solution, where traditional accounting meets modern flexibility. We do more than crunch numbers—we create opportunities. Whether you&apos;re looking for expert accounting services or trained gig workers who can step in on demand, we&apos;ve built a model that adapts to your needs. Our mission is to make high-quality financial management accessible, efficient, and perfectly suited to your business.</p>
      </div>
      <div className='md:w-1/2 px-5'>
       <h1 className='text-primary text-xl font-bold pb-9 pt-3'>Our Unique Approach</h1>
       <div className='flex items-start flex-col gap-4'>
        <div className="flex flex-col gap-1 p-3 rounded-2xl border border-secondary shadow-md">
            <h2 className="text-secondary text-lg font-bold">Accounting Excellence</h2>
            <p className='text-sm'>
                Our team of seasoned accountants delivers precise, reliable financial services, tailored to your business. From bookkeeping to tax planning, we ensure your finances are always in check.
            </p>
        </div>

        <div className="flex flex-col gap-1 p-3 rounded-2xl border border-secondary shadow-md">
            <h2 className="text-secondary text-lg font-bold">Gig Worker Marketplace:</h2>
            <p className='text-sm'>
               Need short-term help without long-term commitment? We&lsquo;ve trained a network of gig workers ready to assist with everything from day-to-day bookkeeping to specialized financial projects. Hire them by the hour or for a contract term, with the peace of mind that comes from knowing they&lsquo;ve been trained by the best.
            </p>
        </div>

        <div className="flex flex-col gap-1 p-3 rounded-2xl border border-secondary shadow-md">
            <h2 className="text-secondary text-lg font-bold">Commission-Based Model:</h2>
            <p className='text-sm'>
               You only pay for what you need. When you hire our gig workers, you pay them directly, and we take a small commission. It&apos;s a win-win that keeps your costs transparent and predictable.
            </p>
        </div>

        </div>
      </div>
      </div>
     </div>
     </>
  )
}

export default Aboutpage