'use client';
import { Bars3Icon, GlobeAltIcon } from '@heroicons/react/24/outline';
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nbOfGuests, setNbOfGuests] = useState(1);

  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();
  console.log(pathname);
  console.log(query);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);
  /* 
    Selection date on the calendar, with startDate/endDate when user click on.
    Param of function is rangesByKey => type RangeKeyDict (get by 'react-date-range') 
    The type of startDate/endDate doesn't allow 'undefined' => condition with verification it's not 'undefine'
  */
  const handleSelect = (rangesByKey: RangeKeyDict) => {
    const ranges = rangesByKey.selection; //selection is the "key" in the const SelectionRange.
    if (ranges && ranges.startDate && ranges.endDate) {
      setStartDate(ranges.startDate);
      setEndDate(ranges.endDate);
    }
  };
  // set params of DateRangePicker :
  const selectionRange: Range = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const resetInput = () => {
    setSearchInput('');
  };

  // The function serves as a search function triggered when the user clicks on the button, sending the user's selected information to the '/search' page.
  const search = () => {};

  // ============================= return =======================================
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push('/')}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={handleChange}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5 " />
            <input
              value={nbOfGuests}
              onChange={(e) => setNbOfGuests(parseInt(e.target.value))}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
