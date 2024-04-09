import intro_img from '../Intro/assets/Financial_growth.png';
import { FaArrowRight } from 'react-icons/fa';

const Intro = () => {
  return (
    <main className="flex flex-col md:flex-row border-2 justify-start md:justify-between md:items-center px-10 space-y-10">
      <div className="max-w-[258px] space-y-4">
        <div className="text-sm font-bold font-['Inter'] bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 inline-block text-transparent bg-clip-text">
          We are We@vers
        </div>
        <div className="text-2xl text-gray-700 font-bold">
          Elevate your digital presence with us.
        </div>
        <div className="text-xs font-['Inter'] leading-[17px]">
          Our comprehensive range of services is designed to cater to your
          unique needs, weaving together tunning design and cutting-edgs
          technology for exceptional results.
        </div>
        <button className="text-[7px] py-[6px] px-5 bg-emerald-600 hover:bg-blue-700 text-white font-['Inter'] rounded">
          <div className="flex flex-row justify-center gap-2 items-center">
            <h3 className="">Hire Us</h3>
            <FaArrowRight />
          </div>
        </button>
      </div>
      <img
        className="shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] rounded-2xl h-auto w-[262.75px] xl:w-[566px]"
        src={intro_img}
        alt="intro image"
      />
    </main>
  );
};
export default Intro;
