import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineStock } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';
import { MdCategory } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';

const ProductSubCom = ({product}) => {
    return (
        <div className='space-y-5 p-8 rounded-2xl bg-linear-to-r shadow group'>

           <div className="relative w-full h-[350px] overflow-hidden rounded-md">

               <Image 
                    src={product.image} 
                    alt="summer-products" 
                    fill 
                    className="object-cover transition duration-500 group-hover:scale-110 group-hover:rotate-1 animate__animated animate__zoomIn"
                />

                <p className='absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow flex items-center gap-3 text-sky-400 animate__animated animate__fadeIn'>
                    <MdCategory />
                    {product.category}
                </p>

            </div>

            <div className='space-y-4'>

                <h2 className='text-2xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent'>
                    {product.name}
                </h2>

                <p className='leading-7 text-gray-500'>
                    {product.description}
                </p>

                <div className='flex justify-between'>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <AiOutlineStock /> In Stock : {product.stock}
                    </p>

                    <p className='text-gray-500 flex items-center gap-3'>
                        <FaRegStar /> {product.rating}
                    </p>
                </div>

                <p className='text-gray-500'>
                    Price : 
                    <span className='bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent text-center font-bold'>
                        {product.price}$
                    </span>
                </p>

                <Link href={`/products/${product.id}`}>
                    <button className='bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 flex items-center gap-3'>
                        <TbListDetails /> See Details
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default ProductSubCom;