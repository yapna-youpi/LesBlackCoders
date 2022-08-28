import React from 'react'

function Footer() {
  return (
    <>
        <div className='footer-content font-inter px-10 py-4 md:px-24 sm:flex sm:pt-28 sm:pb-10 flex-row-reverse justify-around' >

            <div className="footer-blc1 foot">
                <div className="footer-blc1-one footer-blc ">
                    <h4 className='title4'>SERVICES</h4>
                    <ul className='list' >
                        <li className="lig w-7/12 mx-auto">React Developers</li>
                        <li className="lig w-7/12 mx-auto">Ruby Developers</li>
                        <li className="lig w-7/12 mx-auto">javascript Developers</li>
                        <li className="lig w-7/12 mx-auto">Node Developers</li>
                        <li className="lig w-7/12 mx-auto">Rails Developers</li>
                        <li className="lig w-7/12 mx-auto">UI/UX Designers</li>
                    </ul>
                </div>

                <div className="footer-blc1-two footer-blc mt-9 sm:mt-28 sm:pt-2 lg:pt-0 lg:mt-0">
                    <h4 className='title4'>MEET BlackCoders</h4>
                    <ul className='list'>
                        <li className="lig">About Us</li>
                        <li className="lig">Services</li>
                        <li className="lig">Why BlackCoders</li>
                        <li className="lig">Cost-Benefit Analysis</li>
                    </ul>
                </div>
            </div>

            <div className="footer-blc2 w-11/12 text-center mx-auto sm:w-6/12 lg:w-7/12 lg:px-7 lg:flex lg:justify-between ">

                <div className="footer-blc2-one w-full  mt-9 text-center sm:mt-0 sm:w-full sm:text-left lg:w-2/3  ">
                    <div>logo</div>
                    <h2 className='font-black  text-xl font-inter my-4'>We provide you with top-level <br/> nearshore developers from around the world</h2>
                    <h3 className='font-semibold my-4 text-black'>NEW YORK HEADQUARTERS</h3>
                    <h4>
                        <p>349 5th Ave</p>
                        <p>Suite 335  New York,</p >
                        <p className='mb-3'> NY 10016</p>
                    </h4>
                    <p>+237 675 74 74 74</p>
                    <p>email@text.com</p>
                    <div className="icons">
                        i f g h w
                    </div>
                </div>

                <div className="footer-blc2-two mt-9  sm:mt-8 lg:mt-0">
                    <h4 className='title4'>RESOURCES</h4>
                    <ul className='list'>
                        <li className="lig">Success Stories</li>
                        <li className="lig">Podcast</li>
                        <li className="lig">Blog</li>
                        <li className="lig">Contact Us</li>
                    </ul>
                </div>
            </div>

        </div>

        <div className='px-10 py-4 text-xs bg-black text-gray-400  md:px-32 '>
            The names and logos for BlackCoders are registered trademarks of BlackCoders, LLC. All text and design is Copyright © 2022
        </div>
    </>
  )
}

export default Footer