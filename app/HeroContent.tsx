'use client';

import Image from 'next/image';

const HeroContent = ({ content }) => {
  console.log(content);
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h3
        className="text-2xl font-extrabold text-gray-100"
        dangerouslySetInnerHTML={{ __html: content.shortDesc }}
      />
      <h1
        className="text-8xl uppercase text-gray-100 font-extrabold text-center"
        dangerouslySetInnerHTML={{ __html: content.header }}
      />
      <Image
        src={`https:${content.heroImage.fields.file.url}`}
        width={500}
        height={500}
        alt="hero"
        className="relative -top-20"
      />
      <div className="flex justify-between w-full">
        <h3
          className="text-2xl font-extrabold text-gray-100"
          dangerouslySetInnerHTML={{ __html: content.downloadTheApp }}
        />
        <div className="flex gap-4">
          <Image
            src={`https:${content.downloadTheAppImages[0].fields.file.url}`}
            width={100}
            height={50}
            alt="app"
          />{' '}
          <Image
            src={`https:${content.downloadTheAppImages[1].fields.file.url}`}
            width={100}
            height={50}
            alt="app"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
