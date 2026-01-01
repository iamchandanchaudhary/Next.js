"use client";
import React from 'react';
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import courseData from "../data/courses.json";
import Link from 'next/link';

interface Course {
    courseId: string,
    courseName: string,
    courseDescription: string,
    topics: string[],
    bestseller: boolean,
    durationWeek: number,
    level: string
}

function FeaturedCourses() {

    const featuredCourses = courseData.courses.filter((course: Course) => course.bestseller);

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Courses</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>
                </div>
            </div>

            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>

                    {
                        featuredCourses.map((course: Course) => (
                            <div key={course.courseId} className='flex justify-center'>
                                <BackgroundGradient className="flex flex-col h-full overflow-hidden rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                    <img
                                        src={`https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?cs=srgb&dl=pexels-pixabay-60582.jpg&fm=jpg`}
                                        alt="jordans"
                                        height="400"
                                        width="400"
                                        className="object-contain"
                                    />
                                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        {course.courseName}
                                    </p>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {course.courseDescription}
                                    </p>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                                        <span className='text-white mr-1 font-semibold'>Duration:</span>{course.durationWeek} Week
                                    </p>

                                    <Link
                                        href={`/courses/${course.courseId}`}
                                        className="w-max rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
                                    >
                                        <span>Learn More</span>
                                        {/* <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                                Rs 100
                                            </span> */}
                                    </Link>
                                    
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='mt-20 text-center'>
                <Link href={"/courses"}
                    className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    View All Courses
                </Link>
            </div>

        </div>
    )
}

export default FeaturedCourses;
