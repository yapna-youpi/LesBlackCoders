import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

function Work() {
  return (
    <div className='work pt-12 pb-24'>
        <b><h2 className='text-black text-lg font-inter font-bold md:text-5xl text-center py-4 px-3'>
            Work with the best <br/>
            developers in your <span className='font-guthen text-gree text-5xl'> time zones </span>
        </h2></b>
        <div className="work-part2 px-10 justify-center mt-10 md:px-0  md:flex">
            <div className="work-img flex justify-around md:mr-8">
                <img src='https://www.jobsity.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Ftimezone_girl_window-709d0838943214198460b4ce43b54c7f.png&w=640&q=75' alt='femme' />
            </div>
            <div className="work-detail flex justify-around">
                <ul >
                    <li className='listwork'><span className='spanwork'><BsCheckCircleFill /></span> <span className='letterwork'> 100% Bilinguals</span></li>
                    <li className='listwork'><span className='spanwork'><BsCheckCircleFill /></span> <span className='letterwork'> High Retention Rates</span></li>
                    <li className='listwork'><span className='spanwork'><BsCheckCircleFill /></span> <span className='letterwork'> Junior, Mid-level, and Senior Devss</span></li>
                    <li className='listwork'><span className='spanwork'><BsCheckCircleFill /></span> <span className='letterwork'> Expertise in a Variety of Coding Languagess</span></li>
                    <li className='listwork'><span className='spanwork'><BsCheckCircleFill /></span> <span className='letterwork'> Excellent Communication Skillss</span></li>
                    <li className='listwork'><span className='spanwork'><BsCheckCircleFill /></span> <span className='letterwork'> Rigorous Recruitment Processs</span></li>
                    <li className='listwork'><span className='spanwork'><BsCheckCircleFill /></span> <span className='letterwork'> Fast Culture Adaptabilitys</span></li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Work