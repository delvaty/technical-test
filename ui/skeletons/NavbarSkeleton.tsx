import { Skeleton } from '@mui/material';

export const NavbarSkeleton = () => {
  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center w-full">
          {/* esqueleto del logo */}
          <Skeleton variant="text" width={200} height={40} />

          {/* esqueleto del menú de escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <Skeleton variant="text" width={80} height={30} />
            <Skeleton variant="text" width={80} height={30} />
            <Skeleton variant="text" width={120} height={30} />
            <Skeleton variant="text" width={80} height={30} />
          </div>

          {/* esqueleto del botón de menú móvil */}
          <div className="md:hidden">
            <Skeleton variant="circular" width={24} height={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};
