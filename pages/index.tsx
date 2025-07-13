import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="A simple Airbnb clone listing page" />
      </Head>
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-10">Welcome to ALX Listing App</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Cozy Apartment"
            description="A comfortable and stylish apartment in the heart of the city."
            image="/assets/house1.jpg"
          />
          <Card
            title="Modern Villa"
            description="Spacious villa with a pool and ocean view."
            image="/assets/house2.jpg"
          />
          <Card
            title="Cabin Retreat"
            description="Peaceful cabin retreat surrounded by nature."
            image="/assets/house3.jpg"
          />
        </div>

        <div className="mt-10 text-center">
          <Button label="View More Listings" onClick={() => alert('Coming soon!')} />
        </div>
      </main>
    </>
  );
}
