import HeroButton from '@/components/HeroButton'
import Link from 'next/link'
import React from 'react'

import Image from 'next/image';
import { CircleCheckBig } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';


 const words = [
    {
      text: "Imagine",
    className: "text-white  md:text-4xl",
    },
    {
      text: "accounting",
    className: "text-white  md:text-4xl",
    },
    {
      text: "that",
     className: "text-white md:text-4xl",
    },
    {
      text: "works",
       className: "text-white md:text-4xl",
    },
    {
      text: "around",
      className: "text-white  md:text-4xl",
    },
   
    {
      text: "You.",
      className: "text-secondary  md:text-4xl",
    },
  ];
const HomePage = () => {
  return (
    <>
       <div className='flex items-center justify-between px-6 py-3 fixed  top-0 left-0 w-full bg-[rgb(1,10,23)] bg-gradient-to-r from-[rgba(1,10,23,1)] via-[rgba(9,29,71,1)] via-[rgba(9,109,121,1)] to-black'>
        <Link href='/' className='text-white font-bold '>AA Accounting</Link>
        <HeroButton/>
      </div>
    <div className="bg-[rgb(1,10,23)] bg-gradient-to-r from-[rgba(1,10,23,1)] via-[rgba(9,29,71,1)] via-[rgba(9,109,121,1)] to-black h-screen w-full">


      
       <div className='flex flex-col items-center justify-center text-white pt-[35%] md:pt-[15%] w-full'>
       <Image src='/collaboration.svg' alt='' width={100} height={100} className='mx-auto w-[40%] md:w-[20%] py-[5%] md:py-0 '/>
      <TypewriterEffectSmooth words={words} />
      jn
      <p className='text-wrap  mx-auto text-justify text-xs md:text-lg '>
       You&apos;re in control, We Just blend flexibility with expert care. 
      </p>
       </div> 
       

    </div>

     <div className='bg-white md:h-screen w-full mt-[5%]'>
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
     <div className='bg-white py-20 w-full mt-[5%]'>
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
     <div className=" w-full mt-[5%] h-screen">
        <h2 className='text-3xl font-bold text-primary text-center py-5 pb-10'>How It Works</h2>
        <div className='flex flex-col  items-center gap-4 '>
          <div className="flex flex-col gap-1 p-3 rounded-2xl border border-secondary shadow-md w-[50%] -ml-[20%]">
            <h2 className="text-secondary text-lg font-bold">Assess Your Needs:</h2>
            <p className='text-sm'>
               Tell us what you need—whether it&apos;s full-service accounting or gig workers for specific tasks.
            </p>
        </div>

          <div className="flex flex-col gap-1 p-3 rounded-2xl border border-secondary shadow-md w-[50%] ">
            <h2 className="text-secondary text-lg font-bold">Get Matched:</h2>
            <p className='text-sm'>
             We’ll connect you with the right professionals—our in-house team or our trained gig workers.
            </p>
        </div>

          <div className="flex flex-col gap-1 p-3 rounded-2xl border border-secondary shadow-md w-[50%] ml-[20%]">
            <h2 className="text-secondary text-lg font-bold">Flexible Engagement:</h2>
            <p className='text-sm'>
             Hire for a project, a few hours, or on a contract basis—whatever suits your business best.
            </p>
        </div>

        </div>
     </div>
     <div className='w-full px-8 flex flex-col gap-4 py-4 bg-secondary'>
        <h2 className='text-primary text-2xl font-bold'>Join Us</h2>
        <div className='flex items-center flex-col md:flex-row'>
        <p className='text-black w-[70%]'>
            Why settle for less when you can have accounting that adapts to your needs? At [Your Company Name], we&apos;re redefining what it means to manage your finances. Whether you&apos;re a small business or a growing enterprise, we&apos;re here to support your success.
        </p>
        <Button className='rounded-md bg-primary hover:bg-primary hover:shadow-lg text-white shadow-md mx-auto ' asChild>
      <Link href='/workers' className='py-6 px-6'>
        Find Gig Workers
          </Link>
        </Button>
        </div>
     </div>
     </>
  )
}

export default HomePage