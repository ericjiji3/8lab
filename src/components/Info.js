'use client';

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Innovate from '../../public/images/global-network.png';
import Achieve from '../../public/images/metaverse.png';
import Impact from '../../public/images/plant.png';
import Money from '../../public/images/money.png';
import { Parallax } from "react-scroll-parallax";
import CRTEffect from "./OverlayBlue";

export default function Info(){
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        };
        document.addEventListener("resize", resize);
        () => document.removeEventListener("resize", resize);
    }, [width])

    return(
        <Parallax className="h-full bg-blue relative z-[3]">
            <CRTEffect></CRTEffect>
            <div className="relative z-[3] pt-[100px] pb-[25px] lg:pb-[100px] px-[45px]">
            
                    <div>
                        <h2 className="text-mobile2xl text-white lg:text-2xl font-kl mb-[25px] uppercase pointer-events-none">The 8LAB BR8KDOWN</h2>
                        <h2 className="text-mobilexl lg:text-xl font-kl uppercase">Think of us as the testing ground for your ideas, side hustles, new experiences, and discovering what might be the next big thing at the intersection of creativity + tech.</h2>
                    </div>

                
                <div className="flex flex-col lg:flex-row lg:gap-[25px] mt-[50px]">
                    
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Achieve} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Step 1: Brainstorm</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">IDEAS WANTED—Whether it’s big dreams or early drafts, we want to hear it all! Engage in conversations with experts, other members, and our AI creative partner. Share your thoughts and needs, and get feedback to elevate your idea.</span>
                    </div>
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Innovate} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Step 2: Map it Out</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Stay on track with our monthly core groups. Set goals, create roadmaps, focus on key tasks, and hold each other accountable.</span>
                    </div>
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Impact} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Step 3: Put in Work</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Access new tools, join cohorts, unlock resources, and get the actionable guidance you need to get sh*t done and reach your goals.</span>
                    </div>
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Money} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Step 4: Activate the 8PASS</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Discover a new experience with the 8PASS. Gain early access to gifts, products, apps, special deals, events, and other 8LAB benefits.</span>
                    </div>
                </div>
            </div>
        </Parallax>
        
    )
}