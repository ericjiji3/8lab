'use client';

import { useRef, useState, useEffect } from "react";
import React from 'react';
import Image from "next/image";
import Logo from '../../public/images/8lab.png';
import Tilt from 'react-parallax-tilt';
import Card from '../../public/images/card.png';
import { Parallax } from "react-scroll-parallax";
import { Link, Element} from 'react-scroll';

export default function Home(){
    const [xDeg,setXDeg] = useState(0);
    const [yDeg,setYDeg] = useState(0);
    const [bottom, setBottom] = useState(0);
    const [width, setWidth] = useState(0);
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
        setWidth(window.innerWidth);
    }, [])
    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        };
        document.addEventListener("resize", resize);
        () => document.removeEventListener("resize", resize);
    }, [width])
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
        // setYDeg(offsetY);

    }

    return(
        <Element name="home">
        <div className="px-[45px] relative bg-black">
 
            <div>
            <Tilt className="lg:w-[30%] w-[85%] lg:h-[75%] md:h-[85%] h-[575px] fixed lg:top-[15%] top-[15%] lg:left-[38%] left-[7.5%] translate-x-[-7.7%] z-[1] animate-fadeIn opacity-0">
                <div>
                <Parallax rotateY={[0, -180]} startScroll={0} endScroll={bottom}
                    style ={{
                        transformOrigin: '40% 0'
                    }}
                    // style={{
                    
                    //         transform: `perspective(1000px) rotateY(${yDeg * 10}deg) rotateX(${xDeg * 10}deg) scale3d(1,1,1) translateX(-50%)`
                    //     }} 
                    
                    // onMouseMove={tiltRectange}
                    // className="w-[30%] h-[75%] bg-blue fixed top-[15%] left-[50%] translate-x-[-50%] rounded-lg z-[1]"
                    >
                        
                
                
                <Image style={{transform: `rotateY(-180deg)`}} className="absolute top-0 z-[1] w-full lg:w-[80%] rounded-lg" src={Card} width={400} alt="oops"/>
                <Image className="absolute top-0 z-[1] w-full lg:w-[80%] rounded-lg" src={Card} width={400} alt="oops"/>
                </Parallax>
                </div>
            </Tilt>
            </div>

            
            
            
            <div className="h-lvh relative" ref={elRef}>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]">
                    
                    <Parallax className="relative left-[50%] translate-x-[-50%] bg-black inline-block px-[25px] py-[10px] mt-[225px] rounded-lg" opacity={[1,0]} startScroll={0} endScroll={bottom/2}>
                    <div className="font-kl text-button">
                        APPLY NOW
                    </div>
                    </Parallax>
                    
                </div>
                <div className="fixed w-full h-fit lg:w-auto lg:h-auto top-[50%] left-[51%] lg:left-[50%] translate-x-[-50%] translate-y-[-50%] z-[250]">
                {width >= 1024 ?
                    <Parallax translateY={['0px', `-${(bottom / 2) - 37.5}px`]} scale={[1, 0.2]} startScroll={0} endScroll={bottom}>
                        <Link className="hover:cursor-pointer w-full" to="home" smooth="easeIn" delay={150} duration={2500}><Image className="mx-auto" src={Logo} height={65} alt="logo"/></Link>
                    </Parallax>
                    :
                    <Parallax className='sticky top-0' translateY={['0px', `-${(bottom / 2) - 38}px`]} scale={[1, 0.25]} startScroll={0} endScroll={bottom}>
                        <Link className="hover:cursor-pointer w-full" to="home" smooth="easeIn" delay={150} duration={2500}><Image className="mx-auto" src={Logo} height={65} alt="logo"/></Link>
                    </Parallax>
                }
                
                </div>

            </div>
            <Element name="learn">
                <Parallax className="h-lvh relative z-[3] pointer-events-none" opacity={[0,1,'easeIn']} startScroll={bottom/1.5} endScroll={bottom}>
                    <div className="absolute top-[50%] left-[50%] lg:w-auto w-[95vw] translate-x-[-50%] translate-y-[-50%] z-[1] pointer-events-none">
                        <h2 className="text-2xl text-center font-kl uppercase pointer-events-none">In the era of ai, we are still about the people.</h2>
                    </div>
                </Parallax>
                <Parallax className="h-lvh relative z-[3] pointer-events-none" opacity={[0,1,'easeIn']} startScroll={bottom} endScroll={bottom * 2}>
                    <div className="absolute top-[50%] left-[50%] lg:w-auto w-[95vw] translate-x-[-50%] translate-y-[-50%] z-[1] pointer-events-none">
                        <h2 className="text-2xl text-center font-kl uppercase pointer-events-none">8LAB IS A members-only network for people who want to grow and scale their creative ideas.</h2>
                    </div>
                </Parallax>
            </Element>
            
            

        </div>
        </Element>
    )
}