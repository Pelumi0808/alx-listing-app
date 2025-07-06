import type { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: NextPage = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>

      <Card
        title="Cozy Apartment"
        description="A nice and cozy place to stay."
        imageUrl="/assets/sample1.jpg"
      />

      <Button label="Book Now" onClick={() => alert('Booking clicked!')} />
    </main>
  );
};

export default Home;
