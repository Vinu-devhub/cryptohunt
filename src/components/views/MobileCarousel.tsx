import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const MobileCarousel = ({ children: slides }: { children: React.ReactNode }) => {
  const [curr, setCurr] = useState(0);

  const prevSlide = () =>
    setCurr((curr) => (curr === 0 ? slides?.length - 1 : curr - 1));
  const nextSlide = () =>
    setCurr((curr) => (curr === slides?.length - 1 ? 0 : curr + 1));

  return (
    <div className=" overflow-hidden  relative">
      <div className=" flex justify-between transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
      <div className=" absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prevSlide} className=" p-1 rounded-full shadow bg-white/10 text-gray-800 ">
          <ChevronLeft size={20} color="white" />
        </button>
        <button onClick={nextSlide} className=" p-1 rounded-full shadow bg-white/10 text-gray-800 ">
          <ChevronRight size={20} color="white" />
        </button>
      </div>
      <div className=" absolute bottom-4 left-0 right-0">
        <div className=" flex items-center justify-center gap-2">
        {slides?.map((_, i) => (
            <div className={` transition-all w-1 h-1 bg-white rounded-full ${curr === i ? 'p-1' : "bg-opacity-50"} `} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
