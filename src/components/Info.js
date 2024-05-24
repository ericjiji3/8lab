import Image from "next/image";
import Innovate from '../../public/images/innovate.png';
import Achieve from '../../public/images/trophy.png';
import Impact from '../../public/images/world-solid.png';

export default function Info(){
    return(
        <div className="h-lvh bg-blue relative z-[3] pt-[100px] px-[45px]">
            <h2 className="text-2xl">Ideas evolve and become clearer as you work through them.</h2>
            <div className="flex gap-[100px] mt-[50px]">
                <div className="flex-1">
                    <Image className="mb-[20px]" src={Innovate} height={40} alt="oops"/>
                    <h3 className="text-xl mb-[20px]">Innovate</h3>
                    <span className="text-lg block mb-[15px]">If you are curious to know how to merge your creativity with tech and find easier and better ways to bring your imagination to life.</span>
                    <span className="text-lg">If you are looking to experiment and innovate with your imagination in your own unique way with a community that supports you in getting things done and holds each other accountable.</span>
                </div>
                <div className="flex-1">
                    <Image className="mb-[20px]" src={Achieve} height={40} alt="oops"/>
                    <h3 className="text-xl mb-[20px]">Achieve</h3>
                    <span className="text-lg">If you aren't just about dreaming, but about making things happen</span>
                </div>
                <div className="flex-1">
                    <Image className="mb-[20px]" src={Impact} height={40} alt="oops"/>
                    <h3 className="text-xl mb-[20px]">Impact</h3>
                    <span className="text-lg">If you want to see real-time examples and stories, so you don’t have to start from scratch</span>
                </div>
            </div>
        </div>
    )
}