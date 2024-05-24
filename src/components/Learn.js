'use client';

import React, { useRef,useState,useEffect } from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Learn(){
    const [xDeg,setXDeg] = useState(0);
    const [yDeg,setYDeg] = useState(0);
    const [xPos, setXPos] = useState(0);
    const elRef = useRef(null);

    useEffect(() => {
        const options = { passive: true }; // options must match add/remove event
        if(elRef.current){
            let elDimensions = elRef.current.getBoundingClientRect();
            console.log("window width:", elDimensions.top);
        }
        const scroll = (event) => {
         const { pageYOffset, scrollY } = window;
         console.log('yOffset', pageYOffset, 'scrollY', scrollY);
        //  let newPos = (elDimensions.top - scrollY)
        };
        document.addEventListener("scroll", scroll, options);
        // remove event on unmount to prevent a memory leak
        () => document.removeEventListener("scroll", scroll, options);
       }, []);

    const tiltRectange = (e) =>{
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let middleX = (rect.right - rect.left) / 2;
        let middleY = (rect.bottom - rect.top) / 2;

        let offsetX = (e.clientX - middleX) / middleX;
        let offsetY = (middleY - e.clientY) / middleY;
        setXDeg(offsetX);
        setYDeg(offsetY);

        
    }

    const handleScroll = () => {
        if (elRef.current) {
            console.log('window width: ', window.innerWidth);
            setXPos(window.innerWidth)
        }
        
    }

    return(
        <div className="relative z-[4] bg-black w-full h-[200dvh]" ref={elRef} onScroll={handleScroll}>
            <div 
            
                className="sticky z-[1] top-0 pt-[100px] w-full px-[45px] h-dvh"
                >
                <div 
                    style={{
                            transform: `perspective(1000px) translateX(${xPos}px) rotateY(${yDeg * 5}deg) rotateX(${xDeg * 5}deg) scale3d(1,1,1)`
                        }} 
                    className="w-[30%] h-[75%] bg-blue sticky left-[100%] rounded-lg z-[1]"
                    onMouseMove={tiltRectange}
                    
                >
                </div>
            </div>
            
            <div className="absolute z-[0] w-full h-[100dvh] top-[0px]">
                <div className="w-[50%] relative left-[45px] top-[50%] translate-y-[-50%]">
                    <h2 className="text-2xl mb-[5px]">At 8lab, we care a lot about people.</h2>
                    <h3 className="text-xl mb-[25px]">Even though we use a lot of AI lol.</h3>
                    <span className="text-lg">
                    As creatives ourselves, we’ve been through it all. That’s why we’re building what we wish we had when we started. We want to help our community to grow, create, and collaborate. The commitment to people will always be the heart of what we do. Because at the end of the day, we build tech to help us do better, not to take our place. 
                    </span>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}