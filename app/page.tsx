import Image from 'next/image';
import { createClient } from 'contentful';
import HeroContent from './HeroContent';
import ForecastContent from './ForecastContent';

export default async function Home() {
  const client = createClient({
    accessToken: 'eQ9M38NY7Mmpm4HUeOcpZ5EJPwi-_xnwvdxcESnTQGU',
    space: 'catcmf585fup',
  });

  const { items } = await client.getEntries({
    content_type: 'mobilexHero',
  });
  console.log(items);

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between ">
      <div className="z-10 w-full items-center justify-between font-mono text-sm flex-col">
        <HeroContent content={items[0].fields} />
        <ForecastContent content={items[0].fields} />
      </div>
    </main>
  );
}

// const response = await axios.get(
//   `https://cdn.contentful.com/spaces/{space_id}/entries?content_type={content_type1},{content_type2}&include=10`,
//   {
//     headers: {
//       Authorization: 'Bearer {access_token}',
//       'Content-Type': 'application/json',
//     },
//   }
// );
