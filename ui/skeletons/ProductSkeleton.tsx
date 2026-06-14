import { Skeleton } from '@mui/material';

export const ProductSkeleton = ({ even = true }: { even?: boolean }) => {
  return (
    <div className={`flex flex-col ${even ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 py-16 w-full max-w-7xl mx-auto px-4`}>
      {/* esqueleto de texto */}
      <div className="w-full md:w-1/2 flex flex-col order-1 md:order-none p-8">
        <Skeleton variant="text" width="60%" height={60} />
        <Skeleton variant="text" width="40%" height={40} className="mb-6" />
        
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4">
              <Skeleton variant="circular" width={48} height={48} />
              <div className="flex-1">
                <Skeleton variant="text" width="30%" />
                <Skeleton variant="text" width="50%" height={30} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* esqueleto de imagen */}
      <div className="w-full md:w-1/2 order-2 md:order-none">
        <Skeleton variant="rectangular" className="w-full aspect-video md:aspect-square rounded-2xl" />
      </div>
    </div>
  );
};
