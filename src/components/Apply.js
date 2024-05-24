import Image from "next/image";
import Humans from '../../public/images/humans.png';
import Text from '../../public/images/text.png';

export default function Apply(){
    return(
        <div className="relative z-[3] bg-black h-[100dvh]">
            <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                <div className="bg-blue block rounded-[100%] text-2xl w-[250px] h-[250px]">
                    <a className="flex align-middle self-center items-center justify-center w-full h-full font-kl font-bold">APPLY</a>
                </div>
            </div>
            <div className="absolute block w-max top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                <Image className="animate-spin" src={Humans} width={450} height={450} alt="oops"/>
            </div>
            <div className="absolute block w-max top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                <Image className="animate-reverseSpin" src={Text} width={500} height={500} alt="oops"/>
            </div>
            
        </div>
    )
}