import { Skeleton } from '@mui/material';

export const FooterSkeleton = () => {
  return (
    <footer className="bg-brand-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Skeleton variant="text" width={250} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
          </div>

          <div className="flex space-x-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} variant="circular" width={24} height={24} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
