import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaGoogle, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#10182f]'>
           <div className='w-11/12 lg:w-10/12 mx-auto mt-16 py-16'>
             <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
                <div>
                    <Image src={logo} alt='footer' width={250} height={250}></Image>
                    <p className='text-white/60 leading-7'>At Sun-cart, we deliver comfort, style, and convenience for your summer lifestyle—carefully selected products just for you.</p>
                </div>
                <ul className='flex flex-col gap-3'>
                    <h2 className='text-white text-xl font-semibold border-l-2 border-blue-500 pl-3 mr-5 mb-3'>
                        Links
                    </h2>
                    <li><Link href='/' className='text-white/60 hover:bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text hover:text-transparent'>Home</Link></li>
                    <li><Link href='/products' className='text-white/60 hover:bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text hover:text-transparent'>Products</Link></li>
                    <li><Link href='/profile' className='text-white/60 hover:bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text hover:text-transparent'>Profile</Link></li>
                </ul>
                <ul className='flex flex-col gap-3'>
                    <h2 className='text-white text-xl font-semibold border-l-2 border-blue-500 pl-3 mr-5 mb-3'>
                        Others
                    </h2>
                    <li><Link href='/terms' className='text-white/60 hover:bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text hover:text-transparent'>Terms & Conditions</Link></li>
                    <li><Link href='/privacy' className='text-white/60 hover:bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text hover:text-transparent'>Privacy Policy</Link></li>
                </ul>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-white text-xl font-semibold border-l-2 border-blue-500 pl-3 mr-5 mb-3'>
                        Social Links
                    </h2>
                    <p className='text-white/60 mb-3'>Follow Us On Social Media</p>
                    <div className='flex items-center gap-3'>
                        <button className='bg-white p-2 cursor-pointer rounded-full text-xl'><FaFacebook></FaFacebook></button>
                        <button className='bg-white p-2 cursor-pointer rounded-full text-xl'><FaGoogle></FaGoogle></button>
                        <button className='bg-white p-2 cursor-pointer rounded-full text-xl'><FaLinkedin></FaLinkedin></button>
                        <button className='bg-white p-2 cursor-pointer rounded-full text-xl'><FaXTwitter></FaXTwitter></button>
                        <button className='bg-white p-2 cursor-pointer rounded-full text-xl'><FaInstagram></FaInstagram></button>
                    </div>
                </div>
             </div>
           </div>
            <p className='text-white/60 pb-5 text-center'>&copy;2026 Sun-cart | All Rights Reserved </p>
        </div>
    );
};

export default Footer;