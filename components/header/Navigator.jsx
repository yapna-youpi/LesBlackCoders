import Image from 'next/image'
import logo from './logo_blackcoders.png'

export default function Navigator() {
    
    return (
            <div >
                <nav className=" md:flex justify-between">
                    <div className="log pt-5 pl-5">
                        <Image src={logo} width={130} height={55}   />
                        {/* <img src="https://blackcoders-b7f0e.web.app/static/media/blackcoders.26980674.png" /> */}
                    </div>

                    <div className="menu md:flex pt-5">
                        <ul className=" md:flex bg-rose-800">
                            <li className="menu-item">Home</li>
                            <li className="menu-item">About</li>
                            <li className="menu-item">Services</li>
                            <li className="menu-item">Formation</li>
                            <li className="menu-item">Careers</li>  
                        </ul>
                        <aside className="aside bg-orange-600 md:pr-5">
                            <button className="btnlogin mx-5 w-46 inline-flex items-center border-2 border-zinc-900 text-black text-lg font-semibold bg-white rounded-full py-3 px-8 hover:bg-black hover:text-white">Login</button>
                            <button className="btncontact w-46 inline-flex items-center border-2 border-zinc-900 text-white text-lg font-semibold bg-black rounded-full py-3 px-8 hover:bg-white hover:text-black">Contact Us</button>
                            
                        </aside>
                    </div>

                </nav>
            </div>
        )
    }
