'use client';

import Image from "next/image";
import Humans from '../../public/images/humans.png';
import Text from '../../public/images/text.png';
import Earth from '../../public/images/Earth.gif';
import { Element} from 'react-scroll';
import CRTEffect from "./Overlay";
import ApplyPerson from '../../public/images/apply.png';

export default function Apply(){
    return(
        <Element name="apply">
            
            <div className="[text-shadow:_0.5px_0.5px_0_#00c01d] relative z-[3] bg-black w-full h-dvh overflow-x-hidden" >
                <CRTEffect></CRTEffect>
                
                <div className="absolute w-full top-[10%] lg:top-[0%] left-[50%] translate-x-[-50%] px-[45px] py-[100px] z-[3] lg:text-2xl text-mobile2xl mb-[15px] font-kl uppercase text-white text-center">
                    <h2 className="mb-[25px]">IF THIS SOUNDS LIKE YOU…</h2>
                    <h2>APPLY</h2>
                </div>
                <div className="absolute z-[100] top-[50%] lg:top-[55%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    <a href="mailto:nana@8lab.ai" className="block rounded-[100%] text-2xl relative hover:cursor-pointer">
                        <Image className="lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] brightness-75" src={Earth} width={300} height={300} alt="oops"/>
                        <Image className="[text-shadow:_0.5px_0.5px_0_#000000] absolute flex align-middle self-center items-center justify-center font-kl font-bold top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] hover:cursor-pointer" src={ApplyPerson} width={64} height={64} alt="oops"/>
                    </a>
                </div>
                {/* <div className="absolute block w-max top-[55%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    <Image className="animate-spin lg:w-[450px] w-[300px]" src={Humans} width={450} height={450} alt="oops"/>
                </div> */}
                <div className="absolute block w-max top-[50%] lg:top-[55%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    <Image className="animate-reverseSpin lg:w-[275px] w-[200px]" src={Text} width={500} height={500} alt="oops"/>
                </div>
                <h2 className="block w-full absolute top-[55%] lg:top-[65%] left-[50%] translate-x-[-50%] lg:top-[70%] px-[45px] py-[100px] z-[3] lg:text-sm text-mobilesm mb-[15px] font-kl uppercase text-white text-center">Annual membership starts at $999. Learn more and apply now.</h2>
            </div>
    
        </Element>
    )
}