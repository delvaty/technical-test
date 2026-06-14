import { Skeleton } from '@mui/material';

export const ClientsCarouselSkeleton = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col items-center">
        <Skeleton variant="text" width={250} height={50} />
        <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full mt-2"></div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="flex items-center space-x-16 px-8 py-4 opacity-50">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-48 h-24 flex items-center justify-center">
              <Skeleton variant="rectangular" width="100%" height={60} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
