'use client';

import React from 'react';
import { Element} from 'react-scroll';

export default function About(){
    return(
            <Element name="about">
                <div className="relative flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[100px] px-[45px] py-[100px] h-full lg:h-dvh bg-blue z-[3]">
                    <div className="lg:flex-1">
                        <h2 className="font-kl lg:text-2xl text-mobile2xl mb-[15px]">
                            ABOUT US
                        </h2>
                        <span className="block lg:text-lg text-mobilebase mb-[10px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit. Eget mauris pharetra et ultrices neque ornare aenean euismod. Semper eget duis at tellus at urna. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Erat imperdiet sed euismod nisi porta lorem. Ut eu sem integer vitae. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Ut tellus elementum sagittis vitae et leo duis ut diam.
                        </span>
                        <span className="block lg:text-lg text-mobilebase">
                            Consectetur lorem donec massa sapien faucibus. Amet luctus venenatis lectus magna fringilla urna porttitor. Mi quis hendrerit dolor magna eget est lorem ipsum. Vel facilisis volutpat est velit. Et 
                        </span>
                    </div>
                    <div className="lg:flex-1 bg-white h-[40vh] lg:full rounded-xl">

                    </div>
                </div>
            </Element>
        
        
    )
}