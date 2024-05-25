'use client';

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Innovate from '../../public/images/innovate.png';
import Achieve from '../../public/images/trophy.png';
import Impact from '../../public/images/world-solid.png';
import { Parallax } from "react-scroll-parallax";

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
        <Parallax className="lg:h-lvh h-full bg-blue relative z-[3] pt-[100px] px-[45px]">
            <div>
                {width >= 1024 ?
                    <h2 className="text-2xl font-kl uppercase">Ideas evolve and become clearer as you work through them.</h2>
                    :
                    <></>
                }
                
                <div className="flex flex-col lg:flex-row lg:gap-[100px] mt-[50px]">
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Innovate} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl">Innovate</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">If you are curious to know how to merge your creativity with tech and find easier and better ways to bring your imagination to life.</span>
                        <span className="lg:text-lg text-mobilelg block">If you are looking to experiment and innovate with your imagination in your own unique way with a community that supports you in getting things done and holds each other accountable.</span>
                    </div>
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Achieve} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl">Achieve</h3>
                        <span className="lg:text-lg text-mobilelg block">If you aren&apos;t just about dreaming, but about making things happen</span>
                    </div>
                    <div className="flex-1 mb-[150px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Impact} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl">Impact</h3>
                        <span className="lg:text-lg text-mobilelg block">If you want to see real-time examples and stories, so you don&apos;t have to start from scratch</span>
                    </div>
                </div>
            </div>
        </Parallax>
        
    )
}