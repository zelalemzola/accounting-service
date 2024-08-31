import HeroButton from '@/components/HeroButton'
import Link from 'next/link'
import React from 'react'

import Image from 'next/image';
import { CircleArrowOutUpRight, CircleCheckBig, Facebook, Instagram, Linkedin, Mail, Menu, Phone, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Partners from '@/components/Partners';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer';
   
  

 const words = [
    {
      text: "Imagine",
    className: "text-black text-lg md:text-4xl",
    },
    {
      text: "Accounting",
    className: "text-secondary text-lg  md:text-4xl",
    },
    
    {
      text: "working",
       className: "text-black text-lg md:text-4xl",
    },
    {
      text: "around",
      className: "text-black text-lg  md:text-4xl",
    },

    {
      text: "You.",
      className: "text-secondary text-lg  md:text-4xl"
    },
  ];
const HomePage = () => {
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
            <Menu/>
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
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
     
      </div>
    {/* <div className='hidden md:h-screen md:w-full landing'>
     
    </div> */}

    <div
     
     className="h-screen w-full flex items-center justify-center pt-[40%] pb-[20%]  md:py-0 landing">
   <div className='flex items-center flex-col md:flex-row w-full'>
    <div className='w-full md:w-1/2 flex items-center justify-center pl-5 md:pl-20  md:px-4'>
    <div className="flex flex-col items-start justify-center gap-4 -mt-[30%] md:mt-0">
      <div className='flex flex-col  gap-2'>
      <h1 className='text-4xl md:text-5xl text-[#4d4d4d] font-extrabold'>Imagine <span className='text-secondary'>Accounting </span></h1>
      <h1 className='text-3xl md:text-4xl text-primary font-extrabold'>Working Around <span className='text-secondary'>You</span></h1>
      </div>
      <div className='bg-[#c1ff72] px-3 py-1 rounded-xl text-lg'>&lsquo;&lsquo;Grow Your Business&rsquo;&rsquo;</div>
      
       <Button className='rounded-2xl bg-secondary hover:bg-primary shadow-md hover:shadow-lg text-white text-lg p-3 gap-2' >
      <Link href='/workers'>
         Find Gig Workers
          </Link>
          <CircleArrowOutUpRight />
        </Button>
    </div>
    </div>
    {/* <div className='w-full md:w-1/2 flex items-center justify-center px-10 md:px-4 '>
    <div className='flex flex-col items-start gap-3 pt-[20%]'>
    <h1 className='text-2xl md:text-3xl text-[#4d4d4d] font-extrabold'>
      Imagine <span className='text-secondary'>Accounting</span> Working Around <span className='text-secondary'>You</span>
    </h1>
    <p className='text-wrap  text-justify text-xs md:text-lg text-gray-600 '>
       You&apos;re in control, We Just blend flexibility with expert care. 
   </p>
    <div className='flex items-center gap-3'>

    <p className='font-bold text-[#4d4d4d]'>Get Started:</p>
    <Button className='bg-secondary font-bold text-lg flex items-center gap-2 py-3 hover:bg-secondary hover:shadow-lg'><Phone/>9080</Button>
    </div>
    </div>

    </div> */}

    <div className='hidden w-full md:w-1/2 md:flex items-center justify-center '>
    {/* <Image src='/ac2.png' alt='' width={400} height={400} className='rounded-full w-[400px] h-[400px] border-4 shadow-lg '/> */}
    </div>
   </div>
    </div>
    <Partners/>
     <div className='bg-white md:h-screen w-full mt-[5%]' id='about'>
        <div className='flex flex-col md:flex-row  w-full'>
        <div className='md:w-1/2 px-8 '>
      <h1 className='text-primary text-xl font-bold text-start py-9'>Why Work With Us</h1>
      <p className='p-3 rounded-2xl border border-secondary shadow-md'>Welcome to [Your Company Name], where traditional accounting meets modern flexibility. We do more than crunch numbers—we create opportunities. Whether you&apos;re looking for expert accounting services or trained gig workers who can step in on demand, we&apos;ve built a model that adapts to your needs. Our mission is to make high-quality financial management accessible, efficient, and perfectly suited to your business.</p>
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
               Need short-term help without long-term commitment? We’ve trained a network of gig workers ready to assist with everything from day-to-day bookkeeping to specialized financial projects. Hire them by the hour or for a contract term, with the peace of mind that comes from knowing they’ve been trained by the best.
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
     <div className='bg-white py-20 w-full mt-[5%]' >
        <div className='flex flex-col md:flex-row items-center w-full'>
            <div className='flex items-center flex-col gap-6 md:w-1/2 px-5'>
              <Image src='/standout.svg' width={100} height={100} className="w-[50%]"/>
              <h2 className="text-secondary text-4xl font-bold">Why We Stand Out</h2>
            </div>
            <div className='md:w-1/2 px-5'>

            <div className="flex flex-col gap-1 p-3  shadow-md">
               <h2 className="text-secondary text-lg font-bold flex items-center gap-2"><CircleCheckBig /> Tailored Solutions</h2>
               <p className='text-sm'>
                  Every business is different. That’s why we offer both full-service accounting and the ability to hire trained gig workers who fit your exact needs.
               </p>
            </div>

            <div className="flex flex-col gap-1 p-3  shadow-md">
               <h2 className="text-secondary text-lg font-bold flex items-center gap-2"><CircleCheckBig />Agility Meets Expertise:</h2>
               <p className='text-sm'>
                Whether you need a quick fix or ongoing support, our flexible model ensures you get the right help at the right time—without the overhead of a traditional firm.
               </p>
            </div>

            <div className="flex flex-col gap-1 p-3  shadow-md">
               <h2 className="text-secondary text-lg font-bold flex items-center gap-2"><CircleCheckBig />Empowering Talent: </h2>
               <p className='text-sm'>
               We’re not just a company—we’re a community. By training gig workers, we empower them with skills and opportunities, while providing you with access to a flexible, highly skilled workforce.
               </p>
            </div>


            </div>

        </div>
     </div>
     <div className=" w-full mt-[5%] md:h-screen" id='service'>
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
     <div className='w-full  flex flex-col gap-4 py-4  px-8'>
        <div className='w-full  shadow-md border-2 border-secondary '></div>
        <h2 className='text-secondary text-2xl font-bold'>Join Us</h2>
        <div className='flex items-center flex-col md:flex-row'>
        <p className='text-[#4d4d4d] w-full md:w-[70%]'>
            Why settle for less when you can have accounting that adapts to your needs? At [Your Company Name], we&apos;re redefining what it means to manage your finances. Whether you&apos;re a small business or a growing enterprise, we&apos;re here to support your success.
        </p>
        <Button className='rounded-md bg-secondary hover:bg-secondary hover:shadow-lg text-white shadow-md mx-auto ' asChild>
      <Link href='/workers' className='py-6 px-6'>
        Find Gig Workers
          </Link>
        </Button>
        </div>
        <div className='w-full  shadow-md border-2 border-secondary '></div>
        <div className='flex flex-col gap-4'>
        <h2 className='text-primary text-2xl font-bold'>AA Acounting</h2>
        <div className='flex gap-4 md:gap-8 flex-wrap text-2xl text-white'>
          <div className='p-2 bg-primary rounded-full'><Instagram size={32} /></div>
          <div className='p-2 bg-primary rounded-full'><Facebook  size={32}/></div>
          <div className='p-2 bg-primary rounded-full'><Linkedin size={32}/></div>
          <div className='p-2 bg-primary rounded-full'><Twitter size={32}/></div>
          <div className='p-2 bg-primary rounded-full'><Mail size={32}/></div>
        </div>
        </div>
     </div>
     </>
  )
}

export default HomePage