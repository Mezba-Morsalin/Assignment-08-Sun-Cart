import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import one from '@/assets/1.png'
import two from '@/assets/2.png'
import three from '@/assets/3.png'
import four from '@/assets/4.png'
import five from '@/assets/5.png'
import six from '@/assets/6.png'
import seven from '@/assets/7.png'
import eight from '@/assets/8.png'
import nine from '@/assets/9.png'
const Brands = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-24'>
            <div className='space-y-3'>
                <h2 className='text-center text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent'>Trusted by Top Brands</h2>
                <p className="text-center leading-7 text-gray-500">
                  Explore high-quality products from the world’s most trusted brands at the best prices.
                </p>
            </div>
            <Marquee  
            pauseOnHover>
                <div className='flex items-center gap-10 mt-10 px-6 py-6 
                 bg-linear-to-r from-transparent via-gray-100/80 to-transparent rounded-xl'>
                <Image className='object-cover grayscale hover:grayscale-0 transition' src={one} alt='1' width={200} height={200}></Image>
                <Image className='object-cover grayscale hover:grayscale-0 transition' src={two} alt='2' width={200} height={200}></Image>
                <Image className='object-cover grayscale hover:grayscale-0 transition' src={three} alt='3' width={200} height={200}></Image>
                <Image className='object-cover grayscale hover:grayscale-0 transition' src={four} alt='3' width={200} height={200}></Image>
                <Image className='object-cover grayscale hover:grayscale-0 transition' src={five} alt='3' width={200} height={200}></Image>
                <Image className='object-cover grayscale hover:grayscale-0 transition' src={six} alt='3' width={200} height={200}></Image>
                <Image className='object-cover grayscale hover:grayscale-0 transition' src={seven} alt='3' width={200} height={200}></Image>
                <Image className='object-cover grayscale hover:grayscale-0 transition' src={eight} alt='3' width={200} height={200}></Image>
                <Image className='object-cover grayscale hover:grayscale-0 transition' src={nine} alt='3' width={200} height={200}></Image>
                </div>
            </Marquee>
        </div>
    );
};

export default Brands;