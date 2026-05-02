import React from 'react';
import products from '@/lib/data.json'
import Product from './Product';
import Link from 'next/link';
import { MdProductionQuantityLimits } from 'react-icons/md';

import "animate.css";

const Products =  () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-24'>

            <div className='space-y-3 animate__animated animate__fadeInUp'>
                <h2 className='text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent text-center'>
                  Trending Summer Picks
                </h2>

                <p className='text-center leading-7 text-gray-500 animate__animated animate__fadeIn'>
                  Check out the top 3 trending products everyone’s buying this summer—limited stock, don’t miss out!
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 animate__animated animate__fadeInUp'>
                {
                    products.slice(6, 9).map(product => 
                        <div key={product.id} className="animate__animated animate__zoomIn">
                            <Product product={product} />
                        </div>
                    )
                }
            </div>

            <Link className='flex justify-center mt-12' href='/products'>
                <button className='bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 flex items-center gap-3 cursor-pointer animate__animated animate__pulse animate__infinite'>
                    <MdProductionQuantityLimits />See All Products
                </button>
            </Link>

        </div>
    );
};

export default Products;