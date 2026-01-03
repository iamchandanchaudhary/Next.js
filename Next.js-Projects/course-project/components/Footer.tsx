"use client"
import Link from 'next/link';
import React from 'react';

function Footer() {
    return (
        <footer className='bg-black text-gray-400 py-4'>

            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-6 '>

                <div>
                    <h2 className='text-white font-semibold mb-2'>About Us</h2>
                    <p>Physics is a fundamental course that explores the basic laws governing nature and the universe. It helps students understand concepts such as motion, force, energy, matter, electricity.</p>
                </div>

                <div>
                    <h2 className='text-white font-semibold mb-2'>Quick Links</h2>
                    <div className='flex flex-col gap-1'>
                        <Link href={"/"} className='text-gray-400 hover:text-gray-200'>Home</Link>
                        <Link href={"/about"} className='text-gray-400 hover:text-gray-200'>About</Link>
                        <Link href={"/courses"} className='text-gray-400 hover:text-gray-200'>Courses</Link>
                        <Link href={"/contact"} className='text-gray-400 hover:text-gray-200'>Contact</Link>
                    </div>
                </div>

                <div>
                    <h2 className='text-white font-semibold mb-2'>Follow Us</h2>
                    <div className='flex flex-col gap-1'>
                        <Link href={"/"} className='text-gray-400 hover:text-gray-200'>Facebook</Link>
                        <Link href={"/"} className='text-gray-400 hover:text-gray-200'>Instagram</Link>
                        <Link href={"/"} className='text-gray-400 hover:text-gray-200'>Twitter</Link>
                        <Link href={"/"} className='text-gray-400 hover:text-gray-200'>Whatsapp</Link>
                    </div>
                </div>

                <div>
                    <h2 className='text-white font-semibold mb-2'>Contact Us</h2>
                    <ul className='flex flex-col'>
                        <li>Basti, UP</li>
                        <li>Lucknow, India</li>
                        <li>Email: info@courses.com</li>
                        <li>Phon: +91 92121212</li>
                    </ul>
                </div>

            </div>

            <p className='text-center pt-8'>© 2025-26 Physics Course. All rights reserved.</p>

        </footer>
    )
}

export default Footer;
