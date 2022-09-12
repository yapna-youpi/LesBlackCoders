import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { BsCheckCircleFill } from 'react-icons/bs'


function Services() {
  return (
    <div className="services">
        <h2>Our <span className="w-96  mx-auto my-10 font-guthen text-gree"> services</span></h2>
        <div className="service-content1">
            <div className="content-left w-96 h-3/5 px-5 flex justify-around md:mr-20 md:translate-y-14 md:px-0 lg:-translate-y-14">
                <img src="https://www.jobsity.com/_next/image?url=%2Fassets%2Fimg%2Fhome%2Finfo_image1.png&w=1920&q=75" alt="homme"/>
            </div>
            <div className="content-right">
                
                <h3 className="my-5 flex font-bold text-2xl"><span className='spanwork text-gree '><BsCheckCircleFill /></span> Nearshore software</h3>
                <h4 className="my-3 pl-11 font-bold text-2xl">outsourcing</h4>
                <p className="  md:px-11 text-xl text-grey">
                    Jobsity's nearshore developers have the expert <br/>
                    knowledge necessary to help your team achieve <br/> ambitious goals and accelerate your digital <br/> transformation. 
                    All this at a fraction of the cost<br/> of in-house talent and 
                    with retention rates twice <br/>those of North American firms.
                </p>
                <h3 className="mt-12 mb-3 flex  font-bold text-2xl"><span className='spanwork text-gree'><BsCheckCircleFill /></span>  IT staff augmentation</h3>
                <p className=" md:px-11 text-xl text-grey">
                    Find the right fit for your IT team. Top software <br/>
                    developers, QAs, UI/UX designers, and much<br/>
                    more for your projects. Avoid sourcing and<br/>
                    recruitment issues.
                </p>

                <div className='ml-11 mt-8'>
                    <button className='w-46 inline-flex items-center border-2 border-zinc-900 text-black text-lg font-semibold bg-white rounded-full py-4 px-10 hover:bg-black hover:text-white'>Learn More<span className="mx-1 flex translate-x-2  "><HiArrowNarrowRight /></span> </button>
                </div>
            </div>
        </div>

        <h2 className="w-6/12 text-5xl font-bold text-left ml-56 border  mt-28 ">
            Industries that<br/>
            work with Jobsity
            <p className="w-96 text-5xl font-guthen text-blu mt-3 ">developers</p>
        </h2>
        
        <div className="service-content1">
            <div className="content-right">
                
                <h3 className="my-5 flex font-bold text-2xl"><span className='spanwork text-gree '><BsCheckCircleFill /></span> Nearshore software</h3>
                <h4 className="my-3 pl-11 font-bold text-2xl">outsourcing</h4>
                <p className="  md:px-11 text-xl text-grey">
                    Jobsity's nearshore developers have the expert <br/>
                    knowledge necessary to help your team achieve <br/> ambitious goals and accelerate your digital <br/> transformation. 
                    All this at a fraction of the cost<br/> of in-house talent and 
                    with retention rates twice <br/>those of North American firms.
                </p>
                <h3 className="mt-12 mb-3 flex  font-bold text-2xl"><span className='spanwork text-gree'><BsCheckCircleFill /></span>  IT staff augmentation</h3>
                <p className=" md:px-11 text-xl text-grey">
                    Find the right fit for your IT team. Top software <br/>
                    developers, QAs, UI/UX designers, and much<br/>
                    more for your projects. Avoid sourcing and<br/>
                    recruitment issues.
                </p>

                <div className='ml-11 mt-8'>
                    <button className='w-46 inline-flex items-center border-2 border-zinc-900 text-black text-lg font-semibold bg-white rounded-full py-4 px-10 hover:bg-black hover:text-white'>Learn More<span className="mx-1 flex translate-x-2  "><HiArrowNarrowRight /></span> </button>
                </div>
            </div>
            <div className="content-left w-96 h-3/5 px-5 flex justify-around md:mr-20 md:translate-y-14 md:px-0 lg:-translate-y-14">
                <img src="https://www.jobsity.com/_next/image?url=%2Fassets%2Fimg%2Fhome%2Finfo_image1.png&w=1920&q=75" alt="homme"/>
            </div>
        </div>
        <div className="service-content1">
            <div className="content-left"></div>
            <div className="content-right"></div>
        </div>
    </div>
  )
}

export default Services