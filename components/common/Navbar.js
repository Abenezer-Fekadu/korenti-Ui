import Link from 'next/link'
import { useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'



function NavItem({ text, href}) {
    return (
        <li className="cursor-pointer hover:text-gray-300">
            <a href={href}>{text}</a>
        </li>
    );
}


const user = { 'firstname': 'Abel' };


function Navbar() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='absolute top-0 z-10 w-full text-white py-1 bg-black bg-opacity-50 shadow-md'>
            <nav>
               <div className="container flex items-center justify-between">

                    <div className="flex flex-1 justify-between items-center">

                        {/* Logo */}
                        <div className='flex-col gap--1'>
                            <Link href="/">
                                <a>
                                    <img src="/images/logo.png" alt="Logo" className='h-11'/>
                                </a>
                            </Link>
                            <p className='text-xs'>&#160; By Health &#38; Hope for the Generation</p>
                        </div>

                        {/* burger menu */}

                        <div className="lg:hidden flex cursor-pointer">
                            <button className="outline-none mobile-menu-button" onClick={() => setShowNav(!showNav)} >

                            {
                                !showNav ? <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>: <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            }
                            
                            </button>

                        </div>
                    </div>

                    {/* NavItems */}    
                    <div className='hidden items-center gap-10 lg:flex'>

                        {/* TODO: Items will change depending on page and user */}
                        <ul className="flex gap-4">
                            <NavItem text="Success Stories" href="#SuccessStories" />
                            <NavItem text="Events" href="#Events" />
                            <NavItem text="About Us" href="#AboutUs" />
                            <NavItem text="Be a Member" />

                            <button className='cursor-pointer flex hover:text-gray-300'>
                                English / ETB
                            </button>
                        </ul>

                        {/* Avatar or Login Button */}
                        {user ?
                            <img className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="/images/avatar-1.png" alt="avatar" /> :
                            <button type="button" className="border-[3px] border-primary rounded-full px-5 py-1 text-primary hover:bg-primary hover:text-black">
                                Login
                            </button>
                        }
                    </div>
               </div>

                {/* Mobile View */}
                <div className={ `${ showNav ? "max-h-auto": "max-h-0"} bg-black bg-opacity-70 overflow-hidden transition-height duration-500` }  id="mobile-menu">

                    <div className="px-2 pt-2 pb-3 space-y-1">

                        <a href="#SuccessStories" className="text-gray-300 hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Success Stories</a>

                        <a href="#Events" className="text-gray-300 hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">News & Events</a>

                        <a href="#AboutUs" className="text-gray-300 hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>

                        <a href="#DonateMonthly" className="text-gray-300 hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Donate Monthly</a>
                        
                        <div className="">
                        <Menu as="div" className="w-32 inline-block">

                            <Menu.Button className="inline-flex w-full px-3 py-2 text-sm text-base text-gray-300 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                English/ETB

                                <ChevronDownIcon
                                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                aria-hidden="true"
                                />
                                
                            </Menu.Button>

                        </Menu>
                        </div>

                        <div className="">

                            <Menu as="div" className="w-32 inline-block">

                                <Menu.Button className="inline-flex w-full px-3 py-2 text-sm text-base text-gray-300 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    MyAccount

                                    <ChevronDownIcon
                                    className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                    aria-hidden="true"
                                    />
                                    
                                </Menu.Button>

                            </Menu>
                        </div>


                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
