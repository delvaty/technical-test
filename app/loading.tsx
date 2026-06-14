import {
  NavbarSkeleton,
  HeroSkeleton,
  ProductSkeleton,
  AboutUsSkeleton,
  ClientsCarouselSkeleton,
  FooterSkeleton,
} from '../ui/skeletons';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarSkeleton />
      <main>
        <HeroSkeleton />
        {/* renderizar esqueletos de productos */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="w-64 h-10 bg-gray-200 mx-auto rounded"></div>
              <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full mt-4"></div>
            </div>
            <div className="flex flex-col gap-8">
              <ProductSkeleton even={true} />
              <ProductSkeleton even={false} />
              <ProductSkeleton even={true} />
            </div>
          </div>
        </div>
        <AboutUsSkeleton />
        <ClientsCarouselSkeleton />
      </main>
      <FooterSkeleton />
    </div>
  );
}
