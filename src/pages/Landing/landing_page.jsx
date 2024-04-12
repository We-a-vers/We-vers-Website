import React from 'react';

const LandingPage = () => {
    const handleClick = () => {
        alert('Button clicked');
      };
    return (
    <main className="min-w-dvh flex justify-center items-center h-full">
      <section className="w-[218.33px] desktop:w-[800px] flex flex-col font-bold font-rubik">
          <h2 className="text-[22px] desktop:text-[82px] text-center text-black"> 
          We craft 
          <span className='bg-gradient-to-r from-blue-300 to-purple-500 text-transparent bg-clip-text'> immersive </span> 
          digital experiences that resonate with 
          <span className='bg-gradient-to-r from-blue-300 to-purple-500 text-transparent bg-clip-text'> your vision</span>.
        </h2>
        <p className="text-[10px] desktop:text-[23px] font-normal text-center font-inter my-4 desktop:my-16">
            Whether you're a business owner looking to establish your online  presence or an individual with a creative idea, we're here to turn your dreams into captivating realities.
        </p>
        <button
            onClick={handleClick}
            className="px-8 py-2 bg-[#1596cb] hover:bg-blue-700 text-white text-[7px] desktop:text-xl font-normal font-inter mx-auto rounded"> 
            Request a Quote
        </button>
    </section>
      
    </main>
  );
}

export default LandingPage;