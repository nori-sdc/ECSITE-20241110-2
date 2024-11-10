import React from 'react';
import TicketList from './TicketList';
import Cart from './Cart';

const Home: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">チケット販売</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <TicketList />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Home;