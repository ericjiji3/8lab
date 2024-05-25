import Image from 'next/image';
import Mail from '../../public/images/email.png';
import Ig from '../../public/images/instagram.png';
import Twitter from '../../public/images/twitter-2.png';

export default function Header(){
    return(
        <div className='fixed z-[100] top-0 px-[45px] py-[30px] flex justify-between w-full'>
            <div className='flex self-center gap-[15px]'>
                <Image src={Mail} height={15} alt="oops"/>
                <Image src={Ig} height={15} alt="oops"/>
                <Image src={Twitter} height={15} alt="oops"/>
            </div>
            <div className='flex gap-[15px] text-base text-white font-kl weight-[700] non-italic'>
                <a>ABOUT</a>
                <a>APPLY</a>
                <a>LEARN</a>
            </div>
        </div>
    )
}