import TickerTape from '@/component/TickerTape';
import React from 'react';

function page() {
  return (
    <div className="w-full text-xs md:text-sm overflow-hidden select-none flex flex-col gap-2 py-2 mt-5">
      <TickerTape colorTheme="dark" />
    </div>
  )
}

export default page;
