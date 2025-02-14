"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsList, BsX } from "react-icons/bs";

const styles = {
    navLinks: 'ml-10 hover:text-zinc-300 text-md ease-in-out duration-200',
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className={`fixed w-full h-32 right-0 left-0 top-0 pl-3 pr-3 md:pl-10 md:pr-10 py-4 px-4 z-[100] flex items-center border-neutral-900 justify-between transition-colors duration-500 ${scrolled ? 'backdrop-blur-lg bg-black/65' : 'bg-transparent'}`}>
                <div className='flex items-center justify-between h-full w-full'>
                <Link href='/'>
                    <Image 
                        src="/logo2.png"
                        width={160} // Adjusted to a larger size for higher resolution
                        height={160}
                        alt="Logo"
                        className="cursor-pointer w-32 h-32 md:w-40 md:h-40"
                        quality={100} // Ensures maximum image quality
                    />
                </Link>

                    <div className='text-white hidden md:flex sm:flex'>
                        <ul className='hidden sm:flex'>
                            <li className={styles.navLinks}><Link href='#home'>Home</Link></li>
                            {/* <li className={styles.navLinks}><Link href='#services'>Services</Link></li> */}
                            <li className={styles.navLinks}><Link href='#about'>About</Link></li>
                            {/* <li className={styles.navLinks}><Link href='#faq'>FAQs</Link></li> */}
                            <li className={styles.navLinks}><Link href='#'>Contact</Link></li>
                            <li className={styles.navLinks}>
                                <a href='https://www.instagram.com/a1streetcustoms?igsh=MXV6bWhtM3VldHhrYQ=='>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="27"
                                        height="27"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 1.5A4 4 0 0 0 3.5 7.5v9A4 4 0 0 0 7.5 20.5h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.75a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='sm:hidden md:hidden cursor-pointer pl-24'>
                        <BsList onClick={toggleMenu} className='h-8 w-8 text-white' />
                    </div>
                </div>
                <div className={menuOpen ? "fixed top-0 left-0 w-[75%] md:hidden sm:hidden h-screen bg-black p-10 ease-in-out duration-500" : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"}>
                    <div className='flex w-full items-center justify-end'>
                        <div className='cursor-pointer'>
                            <BsX onClick={toggleMenu} className='h-8 w-8 text-white' />
                        </div>
                    </div>
                    <Link href='/'>
                        <Image 
                            src="/logo2.png"
                            width={150}
                            height={70}
                            alt="Logo"
                            className="cursor-pointer"
                        />
                    </Link>
                    <div className='flex-col py-4'>
                        <ul>
                            <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-zinc-300 text-white'><Link href='/'>Home</Link></li>
                            <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-zinc-300 text-white'><Link href='#about'>About</Link></li>
                            <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-zinc-300 text-white'><Link href='#'>Contact</Link></li>
                        </ul>
                    </div>
                    <br/><br/>
                    <h6 className="footer-title pb-4 text-zinc-300">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-white">
                        <a href='https://www.instagram.com/a1streetcustoms?igsh=MXV6bWhtM3VldHhrYQ=='>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="27"
                                height="27"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                     d="M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 1.5A4 4 0 0 0 3.5 7.5v9A4 4 0 0 0 7.5 20.5h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.75a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75z">
                                </path>
                            </svg>

                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
