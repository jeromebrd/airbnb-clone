import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { GlobeAltIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          style={{ objectFit: 'contain', objectPosition: 'left' }}
          alt="logo"
        />
      </div>

      {/* middle - search */}
      <div className="flex items-center rounded-full py-2 md:shadow-sm md:border-2">
        <input
          type="text"
          placeholder="Start your search"
          className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className=" hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 " />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
