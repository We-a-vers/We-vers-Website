import React from 'react';

const LandingPage = () => {
    const handleClick = () => {
        alert('Button clicked');
      };
    return (
    <main className="min-w-dvh flex justify-center items-center h-full my-20">
      <section className="px-[36px] mobile:px-[72px] flex flex-col py-10 font-bold font-[Rubik]">
        <h2 className="lg:text-7xl mobile:text-3xl text-center mb-4">
          We craft 
          <span className='bg-gradient-to-r from-blue-300 to-purple-500 text-transparent bg-clip-text'> immersive </span> 
          <br className="hidden md:inline" />
          digital experiences that
          <br className="hidden md:inline" /> 
          resonate with 
          <span className='bg-gradient-to-r from-blue-300 to-purple-500 text-transparent bg-clip-text'> your vision</span>.
        </h2>
        <p className="text-xl mobile:text-lg font-normal text-center mb-8 my-12 mx-48">
            Whether you're a business owner looking to establish your online
            <br className="hidden md:inline" />
             presence or an individual with a creative idea, we're here to turn your
             <br className="hidden md:inline" />
              dreams into captivating realities.
        </p>
        <button
            onClick={handleClick}
            className="px-8 py-2 bg-[#1596cb] hover:bg-blue-700 text-white rounded w-fit mx-auto"> 
            Request a Quote
        </button>
    </section>
      
    </main>
  );
}

export default LandingPage;