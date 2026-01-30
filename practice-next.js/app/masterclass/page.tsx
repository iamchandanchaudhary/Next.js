"use client"

import { Link } from 'lucide-react';
import React from 'react'
import MasterPopup from './MasterPopup';

function Masterclass() {
    return (
        <div className='bg-black h-screen w-full text-white py-15 px-6'>
            <button className="group flex justify-center items-center border text-center text-xs md:text-sm font-medium relative border-neutral-200 dark:border-white/20 text-black dark:text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span>Join Masterclass</span>
                <span className="absolute inset-x-0 w-1/2 group-hover:w-full h-px mx-auto -bottom-px bg-linear-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 ease-in-out" />

                {/* Enhanced FREE Badge */}
                <span className="absolute -top-3 -right-4 rotate-12 group-hover:-top-4 group-hover:rotate-6 transition-all duration-300 ease-out">
                    {/* Glow effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md blur-md opacity-75 animate-pulse"></span>
                    
                    {/* Main badge */}
                    <span className="relative flex items-center gap-0.5 bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 px-2.5 py-1 text-[10px] md:text-xs font-bold rounded-md shadow-lg shadow-red-500/50 animate-bounce">
                        {/* Sparkle icon */}
                        <svg className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"/>
                        </svg>
                        <span className="tracking-wide">FREE</span>
                        {/* Shine effect */}
                        {/* <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-[shimmer_2s_infinite] rounded-md"></span> */}
                    </span>
                </span>
            </button>

            {/* Add shimmer keyframe animation */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
            `}</style>

            <MasterPopup />
        </div>
    )
}

export default Masterclass;
