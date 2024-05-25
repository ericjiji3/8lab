'use client';

import { useState } from "react";
import React from 'react';
import Image from "next/image";
import Logo from '../../public/images/8lab.png';
import Tilt from 'react-parallax-tilt';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function Home(){
    const [xDeg,setXDeg] = useState(0);
    const [yDeg,setYDeg] = useState(0);

    const tiltRectange = (e) =>{
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let middleX = (rect.left - rect.right) / 2;
        let middleY = (rect.bottom - rect.top) / 2;

        let offsetX = (e.clientX - middleX) / middleX;
        let offsetY = (middleY - e.clientY) / middleY;
        setXDeg(offsetX);
        setYDeg(offsetY);

    }

    return(
        <div className="px-[45px] relative">
            <Tilt className="w-[30%] h-[75%] bg-blue fixed top-[15%] left-[50%] translate-x-[-50%] rounded-lg z-[1]">
            <div 
                    // style={{
                    
                    //         transform: `perspective(1000px) rotateY(${yDeg * 10}deg) rotateX(${xDeg * 10}deg) scale3d(1,1,1) translateX(-50%)`
                    //     }} 
                    
                    // onMouseMove={tiltRectange}

                    >
                </div>
            </Tilt>
            
            <div className="h-lvh relative">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]">
                    <Image src={Logo} height={120} alt="logo"/>
                    <div className="relative left-[50%] translate-x-[-50%] bg-black inline-block px-[25px] py-[5px] mt-[50px] rounded-lg">
                        APPLY NOW
                    </div>
                </div>
                
            </div>
            <div className="h-lvh relative">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]">
                    <h2 className="text-2xl text-center font-kl uppercase">In the era of ai, we are still about the people.</h2>
                </div>
            </div>
            <div className="h-lvh relative">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]">
                    <h2 className="text-2xl text-center font-kl uppercase">8LAB IS A members-only network for people who want to grow and scale their creative ideas.</h2>
                </div>
            </div>
            

        </div>
    )
}