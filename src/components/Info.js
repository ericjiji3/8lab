'use client';

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Innovate from '../../public/images/innovate.png';
import Achieve from '../../public/images/trophy.png';
import Impact from '../../public/images/world-solid.png';
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
        <Parallax className="lg:h-lvh h-full bg-blue relative z-[3]">
            <CRTEffect></CRTEffect>
            <div className="relative z-[3] pt-[100px] px-[45px]">
                {width >= 1024 ?
                    <div>
                        <h2 className="text-2xl font-kl uppercase mb-[15px]">Ideas evolve and become clear as you work on them.</h2>
                        <h3 className="text-xl font-kl uppercase">Whether it’s starting a business, launching a side hustle, or getting a promotion, 8LAB is where you experiment and figure things out.</h3>
                    </div>
                    :
                    <></>
                }
                
                <div className="flex flex-col lg:flex-row lg:gap-[100px] mt-[75px]">
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Achieve} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Innovate</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Early Access to New Tech: Join fun challenges where you can test the latest tools,  make extra $, share your thoughts, and stay ahead of the game.</span>
                    </div>
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Innovate} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Grow</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Surround yourself with others who are where you want to be and Learn new ways of thinking.</span>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Get to work on your idea by joining  our  monthly  programs where you get expert advice and feedback to get better and keep going.</span>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Unlock cool tools, work on your ideas, and get practical guidance to bring them to life. </span>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Get exclusive insights, case studies, reports, and special sessions with top industry leaders.</span>
                    </div>
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Impact} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Connect</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">AI-Powered Networking: connect with the right people, ensuring meaningful interactions and collaborations.</span>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Be part of a special community of top creatives where you can showcase your work, collaborate, and get inspired.</span>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Gain insider access to events and key decision-makers at brands from all over the world.</span>
                    </div>
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Money} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Save Money</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Get special discounts on popular apps, creative spaces, experiences, restaurants, brands and many more from our exclusive vendor database.</span>
                    </div>
                </div>
            </div>
        </Parallax>
        
    )
}