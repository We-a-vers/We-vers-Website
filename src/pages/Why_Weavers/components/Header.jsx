import { useState, useEffect } from 'react';

function Header() {
  const [headerInfo] = useState({});

  useEffect(() => {});

  return (
    <div className="flex flex-col gap-2 tablet:gap-5">
      <h1 className="text-sm">Why Weavers</h1>
      <h2 className="text-[28px] tablet:text-[38px] desktop:text-[64px] text-foundation-blue-normal font-medium font-chi-sans">
        {headerInfo.title}
      </h2>

      <p className="text-natural-color-black text-xs tablet:text-sm desktop:text-2xl font-normal font-chi-sans leading-normal text-justify">
        {headerInfo.description}
      </p>
    </div>
  );
}

export default Header;
