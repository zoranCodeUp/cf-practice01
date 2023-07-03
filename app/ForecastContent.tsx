'use client';

import Image from 'next/image';

const ForecastContent = ({ content }) => {
  console.log(content);
  return (
    <div className="bg-green-400 min-w-screen min-h-screen flex flex-col  items-center justify-center gap-10">
      <h3
        className="text-2xl max-w-[1200px]"
        dangerouslySetInnerHTML={{ __html: content.dataUsageDesc }}
      />
      <h2
        className="text-6xl max-w-[1600px] uppercase font-extrabold"
        dangerouslySetInnerHTML={{ __html: content.dataUsageTitle }}
      />
      <div className="h-[400px] relative w-[400px] -top-[200px]">
        <Image
          src={`https:${content.dataUsageImage.fields.file.url}`}
          fill
          alt="hero"
        />
      </div>
      <button className="bg-gray-800 text-white py-2 px-4 font-bold -top-[200px] relative">
        {content.dataUsageButton}
      </button>
    </div>
  );
};

export default ForecastContent;
