import Link from 'next/link';
import React from 'react';
import { cn } from "@/lib/utils";
import { Spotlight } from './ui/Spotlight';

function HeroSection() {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />

            <div className='p-4 relative z-10 w-full text-center'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master this Course</h1>
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ducimus temporibus expedita a ut asperiores nobis veritatis vero laboriosam eius. Laudantium expedita quisquam nulla fugit dolorum temporibus. Ducimus, ipsam laborum.</p>

                <div>
                    <button className='mt-4'>
                        <Link href={"/courses"}>
                            Explore Courses
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
