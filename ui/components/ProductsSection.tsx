'use client';

import { ProductsSectionProps } from '../../domain/types';
import { Product } from './Product';

export const ProductsSection = ({ products }: ProductsSectionProps) => {
  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Nuestros Productos</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col gap-8">
          {products.map((product, index) => (
            <Product key={index} {...product} even={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};
