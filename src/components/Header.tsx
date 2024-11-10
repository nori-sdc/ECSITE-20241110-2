import React from 'react';
import { Ticket } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Ticket size={24} />
          <span className="text-xl font-bold">TicketHub</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-200">ホーム</a></li>
            <li><a href="#" className="hover:text-blue-200">イベント</a></li>
            <li><a href="#" className="hover:text-blue-200">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;