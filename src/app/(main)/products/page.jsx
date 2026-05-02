import React from 'react';
import ProductSubCom from './ProductSubComponent';
import Link from 'next/link';
import products from '@/lib/data.json';

import "animate.css";

const ProductsPage = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-24 mb-12'>

            <div className='space-y-3 animate__animated animate__fadeInUp'>
                <h2 className='text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent text-center'>
                  Summer Essentials
                </h2>

                <p className='text-center leading-7 text-gray-500 animate__animated animate__fadeIn'>
                  Explore top-quality summer items at unbeatable prices—perfect for sunny days
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    products.map(product => (
                        <div key={product.id} className="animate__animated animate__zoomIn">
                            <ProductSubCom product={product} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default ProductsPage;