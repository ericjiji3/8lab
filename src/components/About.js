'use client';

import React from 'react';
import { Element} from 'react-scroll';
import CRTEffect from './OverlayBlue';

export default function About(){
    return(
            <Element name="about">
                
                <div className='relative z-[3] w-full'>
                    
                <div className="relative h-full lg:h-dvh bg-blue z-[3]">
                <CRTEffect></CRTEffect>
                <div className="px-[45px] flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[100px] py-[100px] relative z-[3]">
                
                <div className='lg:flex-1'>
                    <h2 className="font-kl lg:text-2xl text-mobile2xl mb-[25px] uppercase">
                        ok, so... wtf is 8lab? 
                    </h2>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                    Ideas evolve and become clearer as you work through them.
So, if you aren't just about dreaming, but about making things happen;
If you are curious to know how to merge your creativity with tech and find easier and better ways to bring your imagination to life;
If you want to see real-time examples and stories, so you don’t have to start from scratch;
If you are looking for a pathway that will help you to make more informed decisions;
If you want to get started;
If your goal is to grow and level up;
If you want to make the world better;
and if you are looking to experiment and innovate with your imagination in your own unique way with a community that supports you in getting things done and holds each other accountable: 
Then, 8LAB is the right place for you. 

                    </span>
                    {/* <span className="block lg:text-lg text-mobilebase">
                        Consectetur lorem donec massa sapien faucibus. Amet luctus venenatis lectus magna fringilla urna porttitor. Mi quis hendrerit dolor magna eget est lorem ipsum. Vel facilisis volutpat est velit. Et 
                    </span> */}
                </div>
                <div className="lg:flex-1 bg-white h-[40vh] lg:full rounded-xl relative z-[3]">

                </div>
                </div>
            </div>
                </div>
                
            </Element>
        
        
    )
}