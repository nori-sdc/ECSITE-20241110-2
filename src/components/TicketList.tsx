import React from 'react';
import { Calendar } from 'lucide-react';

const tickets = [
  { id: 1, name: 'サマーフェスティバル', date: '2024-07-15', price: 5000 },
  { id: 2, name: 'ロックコンサート', date: '2024-08-20', price: 7500 },
  { id: 3, name: 'クラシック音楽祭', date: '2024-09-10', price: 6000 },
];

const TicketList: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">利用可能なチケット</h2>
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{ticket.name}</h3>
            <div className="flex items-center text-gray-600 mt-2">
              <Calendar size={16} className="mr-2" />
              <span>{ticket.date}</span>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-lg font-bold">¥{ticket.price.toLocaleString()}</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                カートに追加
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;