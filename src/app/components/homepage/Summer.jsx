import Image from 'next/image';
import logo1 from '@/assets/logo1.png'
import logo2 from '@/assets/logo2.png'
import logo3 from '@/assets/logo3.png'
import { IoWater } from 'react-icons/io5';
import { FaLeaf, FaRegSun } from 'react-icons/fa';

const Summer = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-24'>
            <div className='space-y-3'>
                <h2 className='text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent text-center'>Summer Care Tips</h2>
                <p className='text-center leading-7 text-gray-500'>Follow these easy summer care tips to stay cool, comfortable, and full of energy all day long.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                <div className='p-8 shadow rounded-2xl space-y-3'>
                    <div>
                        <Image className='mx-auto' src={logo1} width={200} height={200} alt='water-bottle'></Image>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='text-xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent text-center'>Stay Hydrated</h3>
                    <p className='text-center leading-7 text-gray-500'>Drink plenty of water throughout the day to keep your body cool and prevent dehydration.</p>
                    </div>
                    <div className='bg-blue-100 w-70 rounded-full mx-auto'>
                        <p className=' text-blue-400 text-center p-2 flex items-center gap-2'><IoWater />8–10 glasses of water daily</p>
                    </div>
                </div>
                <div className='p-8 shadow rounded-2xl space-y-3'>
                    <div>
                        <Image className='mx-auto' src={logo2} width={200} height={200} alt='water-bottle'></Image>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='text-xl font-bold text-orange-400 text-center'>Use Sun Protection</h3>
                    <p className='text-center leading-7 text-gray-500'>Apply sunscreen regularly and wear sunglasses or hats to protect your skin from harmful UV rays.</p>
                    </div>
                    <div className='bg-yellow-100 w-70 rounded-full mx-auto'>
                        <p className=' text-orange-400 text-center p-2 flex items-center gap-2'><FaRegSun />8–10 glasses of water daily</p>
                    </div>
                </div>
                <div className='p-8 shadow rounded-2xl space-y-3'>
                    <div>
                        <Image className='mx-auto' src={logo3} width={200} height={200} alt='water-bottle'></Image>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='text-xl font-bold text-green-500 text-center'>Wear Light Clothing</h3>
                    <p className='text-center leading-7 text-gray-500'>Choose lightweight and breathable fabrics like cotton to stay comfortable in the heat.</p>
                    </div>
                    <div className='bg-green-100 w-70 rounded-full mx-auto'>
                        <p className=' text-green-500 text-center p-2 flex items-center gap-2'><FaLeaf />Cotton is best for summer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summer;