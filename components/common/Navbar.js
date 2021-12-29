function NavItem({ text, href }) {
    return (
        <li className="cursor-pointer hover:text-gray-300">
            <a href={href}>{text}</a>
        </li>
    );
}


const user = { 'firstname': 'Abel' };


function Navbar() {
    return (
        <div className='absolute top-0 z-10 w-full text-white py-1 bg-black bg-opacity-50 shadow-md'>
            <nav className="container flex items-center justify-between">
                <div className="flex flex-1 justify-between items-center">
                    {/* Logo */}
                    <div className='flex-col gap--1'>
                        <a href='/'>
                            <img src="/images/logo.png" alt="Logo" className='h-11'/>
                        </a>

                        <p className='text-xs'>&#160; By Health &#38; Hope for the Generation</p>
                    </div>

                    {/* burger menu */}
                    <div className="cursor-pointer lg:hidden" id="burger">
                        <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
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
            </nav>
        </div>
    )
}

export default Navbar
