"use client"

import { Link } from 'lucide-react';
import React from 'react'

function MasterPopup() {
    return (
        <>
        {/* <div className='bg-black h-screen w-full text-white py-10 px-6'> */}
            <button className="group mt-20 flex justify-center items-center border text-center text-xs md:text-sm font-medium relative border-neutral-200 dark:border-white/20 text-black dark:text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span>Join Masterclass</span>
                <span className="absolute inset-x-0 w-1/2 group-hover:w-full h-px mx-auto -bottom-px bg-linear-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 ease-in-out" />

                {/* Enhanced FREE Badge */}
                <span className="absolute -top-3 -right-4 rotate-12 group-hover:-top-4 group-hover:rotate-6 transition-all duration-300 ease-out animate-[wiggle_1s_ease-in-out_infinite]">
                    {/* Glow effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md blur-md opacity-75 animate-[glow_1.5s_ease-in-out_infinite]"></span>
                    
                    {/* Main badge */}
                    <span className="relative flex items-center gap-0.5 bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 px-2.5 py-1 text-[10px] md:text-xs font-bold rounded-md shadow-lg shadow-red-500/50 animate-[pop_0.6s_ease-in-out_infinite]">
                        {/* Sparkle icon */}
                        <svg className="w-3 h-3 animate-[twinkle_1.5s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"/>
                        </svg>
                        <span className="tracking-wide">FREE</span>
                        {/* Shine effect */}
                        {/* <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-[shimmer_2s_ease-in-out_infinite] rounded-md overflow-hidden"></span> */}
                    </span>
                </span>
            </button>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0%, 100% { transform: translateX(-150%) skewX(-12deg); }
                    50% { transform: translateX(150%) skewX(-12deg); }
                }
                @keyframes wiggle {
                    0%, 100% { transform: rotate(12deg); }
                    25% { transform: rotate(18deg) scale(1.05); }
                    75% { transform: rotate(6deg) scale(0.95); }
                }
                @keyframes pop {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                @keyframes glow {
                    0%, 100% { opacity: 0.5; filter: blur(8px); }
                    50% { opacity: 1; filter: blur(12px); }
                }
                @keyframes twinkle {
                    0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
                    25% { transform: scale(0.8) rotate(90deg); opacity: 0.6; }
                    50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
                    75% { transform: scale(0.8) rotate(270deg); opacity: 0.6; }
                }
            `}</style>
        {/* </div> */}
        </>
    )
}

export default MasterPopup;