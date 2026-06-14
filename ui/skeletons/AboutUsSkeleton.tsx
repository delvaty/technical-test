import { Skeleton } from '@mui/material';

export const AboutUsSkeleton = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <Skeleton variant="text" width={300} height={60} />
          <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full mt-2 mb-8"></div>
          <Skeleton variant="text" width={400} height={40} className="mb-8" />
          
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="95%" />
          <Skeleton variant="text" width="80%" />
        </div>
      </div>
    </section>
  );
};
