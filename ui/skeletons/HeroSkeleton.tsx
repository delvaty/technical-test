import { Skeleton } from '@mui/material';

export const HeroSkeleton = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-200 flex items-center justify-center">
      <Skeleton variant="rectangular" width="100%" height="100%" className="absolute inset-0" />
      
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto flex flex-col items-center">
        <Skeleton variant="text" width="80%" height={100} sx={{ bgcolor: 'rgba(255,255,255,0.4)' }} />
        <Skeleton variant="text" width="60%" height={40} sx={{ bgcolor: 'rgba(255,255,255,0.4)', mt: 2 }} />
      </div>
    </section>
  );
};
