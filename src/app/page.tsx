import Header from '../components/Header';
import Banner from '@/components/Banner';
import { getCardsData, getExploreData } from '../../lib/api';
import SmallCard from '@/components/SmallCard';
import MediumCard from '@/components/MediumCard';
import LargeCard from '@/components/LargeCard';
import Footer from '@/components/Footer';

interface ExploreData {
  img: string;
  location: string;
  distance: string;
}

interface CardsData {
  img: string;
  title: string;
}

export default async function Home() {
  const exploreData = await getExploreData();
  const cardsData = await getCardsData();

  return (
    <div>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* pull data from a server - API */}
            {exploreData?.map(
              ({ img, location, distance }: ExploreData, index: number) => (
                <SmallCard
                  key={`${index}-${location}`}
                  img={img}
                  location={location}
                  distance={distance}
                />
              )
            )}
          </div>
        </section>
        {/* Section with an overflow without scrollbar */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }: CardsData, index: number) => (
              <MediumCard key={`${title} - ${index}`} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}
