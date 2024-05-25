'use client';

import { useRef, useState, useEffect } from "react";
import React from 'react';
import Image from "next/image";
import Logo from '../../public/images/8lab.png';
import Tilt from 'react-parallax-tilt';
import { Parallax } from "react-scroll-parallax";

export default function Home(){
    const [xDeg,setXDeg] = useState(0);
    const [yDeg,setYDeg] = useState(0);
    const [bottom, setBottom] = useState(0);

    const [imgLoaded, setImgLoaded] = useState(false);
    const elRef = useRef(null);
    useEffect(() => {
        if(elRef.current){
            let elDimensions = elRef.current.getBoundingClientRect();
            console.log(elDimensions);
            let elHeight = elDimensions.bottom - elDimensions.top;
            setBottom(elHeight);
            console.log(bottom);
        }
    }, [])
    useEffect(()=>{
        const resize = () => {
            if(elRef.current){
                let elDimensions = elRef.current.getBoundingClientRect();
                let elHeight = elDimensions.bottom - elDimensions.top;
                setBottom(elHeight);
                console.log(bottom);
            }
        }
        
        document.addEventListener("resize", resize);
        // remove event on unmount to prevent a memory leak
        () => document.removeEventListener("resize", resize);
      }, []);
    const tiltRectange = (e) =>{
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let middleX = (rect.left - rect.right) / 2;
        let middleY = (rect.top -rect.bottom) / 2;

        let offsetX = (e.clientX - middleX) / middleX;
        let offsetY = (middleY - e.clientY) / middleY;
        console.log("offset X: ", offsetX, "ofset Y: ", offsetY);
        setXDeg(offsetX);
        setYDeg(offsetY);

    }

    return(
        <div className="px-[45px] relative">
 
            <div>
            <Tilt className="w-[30%] h-[75%] bg-blue fixed top-[15%] left-[35%] translate-x-[-50%] rounded-lg z-[1] animate-fadeIn opacity-0">
            <div 
                    // style={{
                    
                    //         transform: `perspective(1000px) rotateY(${yDeg * 10}deg) rotateX(${xDeg * 10}deg) scale3d(1,1,1) translateX(-50%)`
                    //     }} 
                    
                    // onMouseMove={tiltRectange}
                    // className="w-[30%] h-[75%] bg-blue fixed top-[15%] left-[50%] translate-x-[-50%] rounded-lg z-[1]"
                    >
                </div>
            </Tilt>
            </div>

            
            
            
            <div className="h-lvh relative" ref={elRef}>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]">
                    
                    <Parallax className="relative left-[50%] translate-x-[-50%] bg-black inline-block px-[25px] py-[5px] mt-[225px] rounded-lg" opacity={[1,0]} startScroll={0} endScroll={bottom/2}>
                    <div>
                        APPLY NOW
                    </div>
                    </Parallax>
                    
                </div>
                <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]">
                <Parallax translateY={['0px', `-${(bottom / 2) - 35}px`]} scale={[1, 0.1]} startScroll={0} endScroll={bottom}>
                        <Image src={Logo} height={120} alt="logo"/>
                </Parallax>
                </div>

            </div>
            <div className="h-lvh relative pointer-events-none">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] pointer-events-none">
                    <h2 className="text-2xl text-center font-kl uppercase pointer-events-none">In the era of ai, we are still about the people.</h2>
                </div>
            </div>
            <div className="h-lvh relative pointer-events-none">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] pointer-events-none">
                    <h2 className="text-2xl text-center font-kl uppercase pointer-events-none">8LAB IS A members-only network for people who want to grow and scale their creative ideas.</h2>
                </div>
            </div>
            

        </div>
    )
}