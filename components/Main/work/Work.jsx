import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

function Work() {
  return (
    <div className='work pt-12 pb-24'>
        <b><h2 className='text-black text-lg font-inter font-bold md:text-5xl text-center py-4 px-3'>
            Work with the best <br/>
            developers in your <span className='font-guthen text-gree text-5xl'> time zone </span>
        </h2></b>
        <div className="work-part2 px-10 justify-center mt-10 md:px-0  md:flex">
            <div className="work-img flex justify-around md:mr-8">
                <img src='https://www.jobsity.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Ftimezone_girl_window-709d0838943214198460b4ce43b54c7f.png&w=640&q=75' alt='femme' />
            </div>
            <div className="work-detail flex justify-around">
                <ul >
                    <li className='my-5 mr-2 flex '><span className='text-gree text-3xl mr-4'><BsCheckCircleFill /></span> <span className='text-black font-semibold text-2xl'> 100% Bilinguals</span></li>
                    <li className='my-5 mr-2 flex '><span className='text-gree text-3xl mr-4'><BsCheckCircleFill /></span> <span className='text-black font-semibold text-2xl'> High Retention Rates</span></li>
                    <li className='my-5 mr-2 flex '><span className='text-gree text-3xl mr-4'><BsCheckCircleFill /></span> <span className='text-black font-semibold text-2xl'> Junior, Mid-level, and Senior Devss</span></li>
                    <li className='my-5 mr-2 flex '><span className='text-gree text-3xl mr-4'><BsCheckCircleFill /></span> <span className='text-black font-semibold text-2xl'> Expertise in a Variety of Coding Languagess</span></li>
                    <li className='my-5 mr-2 flex '><span className='text-gree text-3xl mr-4'><BsCheckCircleFill /></span> <span className='text-black font-semibold text-2xl'> Excellent Communication Skillss</span></li>
                    <li className='my-5 mr-2 flex '><span className='text-gree text-3xl mr-4'><BsCheckCircleFill /></span> <span className='text-black font-semibold text-2xl'> Rigorous Recruitment Processs</span></li>
                    <li className='my-5 mr-2 flex '><span className='text-gree text-3xl mr-4'><BsCheckCircleFill /></span> <span className='text-black font-semibold text-2xl'> Fast Culture Adaptabilitys</span></li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Work