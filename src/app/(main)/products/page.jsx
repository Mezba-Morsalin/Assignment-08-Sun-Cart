import React from 'react';
import ProductSubCom from './ProductSubCom';
import Link from 'next/link';
import { MdProductionQuantityLimits } from 'react-icons/md';
import products from '@/lib/data.json'

const ProductsPage = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-24'>
            <div className='space-y-3'>
                <h2 className='text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent text-center'>Summer Essentials</h2>
            <p className='text-center leading-7 text-gray-500'>Explore top-quality summer items at unbeatable prices—perfect for sunny days</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    products.map(product => <ProductSubCom key={product.id} product = {product}></ProductSubCom>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;