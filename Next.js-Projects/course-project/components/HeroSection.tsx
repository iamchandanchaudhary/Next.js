import React from 'react';
import Link from 'next/link';

import { cn } from "@/lib/utils";
import { Spotlight } from './ui/Spotlight';
import { Button } from "./ui/moving-border";

import { Boxes } from "./ui/background-boxes";

function HeroSection() {
    return (
        <div className='h-auto md:h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="#009689"
            />

            <Boxes />

            <div className='p-4 relative z-10 w-full text-center flex flex-col gap-5 mt-28'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master this Course</h1>
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto'>Physics is a fundamental course that explores the basic laws governing nature and the universe. It helps students understand concepts such as motion, force, energy, matter, electricity.</p>

                <div>
                    <button className='mt-4'>
                        <Link href={"/courses"}>
                            <Button
                                borderRadius='1.75rem'
                                className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'
                            >
                                Explore Courses
                            </Button>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
