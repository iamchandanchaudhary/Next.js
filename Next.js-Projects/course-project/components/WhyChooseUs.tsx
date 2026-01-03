"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const contentData = [
    {
        title: "Expert Faculty",
        description: "Our courses are designed and taught by experienced professionals who have strong academic backgrounds and real-world exposure. They focus on concept clarity, practical understanding, and problem-solving skills, ensuring students gain both theoretical knowledge and industry-relevant expertise with continuous guidance and mentorship.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src={`https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?cs=srgb&dl=pexels-pixabay-60582.jpg&fm=jpg`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Practical Learning Approach",
        description: "We emphasize hands-on learning through real-life examples, experiments, projects, and problem-solving sessions. This approach helps students understand complex concepts easily, apply knowledge effectively, and build confidence in their skills, making learning more engaging, interactive, and results-oriented.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                Collaborative Editing
            </div>
        ),
    },
    {
        title: "Structured Curriculum",
        description: "Our curriculum is carefully structured from basics to advanced levels, ensuring smooth learning progression. Each topic is logically organized to strengthen fundamentals before moving ahead, helping students avoid confusion, improve retention, and achieve a deeper understanding of the subject with consistent practice.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                Version control
            </div>
        ),
    },
    {
        title: "Student-Centered Support",
        description: "We provide dedicated student support through doubt-clearing sessions, personalized guidance, and continuous performance feedback. Our goal is to ensure every learner feels supported throughout their journey, stays motivated, overcomes challenges confidently, and achieves academic and professional success.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src={`https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?cs=srgb&dl=pexels-pixabay-60582.jpg&fm=jpg`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Proven Results",
        description: "Our teaching methodology has helped many students achieve strong academic performance and career growth. With a focus on concept mastery, discipline, and regular assessment, we consistently deliver reliable results that build trust, credibility, and long-term value for our learners.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                Version control
            </div>
        ),
    }
]


function WhyChooseUs() {
    return (
        <div className="w-full py-0">
            <StickyScroll content={contentData} />
        </div>
    )
}

export default WhyChooseUs;
