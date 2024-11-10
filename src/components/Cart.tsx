import React from 'react';
import { ShoppingCart, CreditCard } from 'lucide-react';

const Cart: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <ShoppingCart size={24} className="mr-2" />
        カート
      </h2>
      <div className="space-y-2 mb-4">
        <p className="text-gray-600">カートは空です</p>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">合計:</span>
          <span className="text-xl font-bold">¥0</span>
        </div>
        <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition flex items-center justify-center">
          <CreditCard size={20} className="mr-2" />
          支払いに進む
        </button>
      </div>
    </div>
  );
};

export default Cart;