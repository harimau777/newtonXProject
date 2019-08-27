import React, { useState } from 'react';

import Loading from './Loading';
import Search from './search/Search';
import WalletBalance from './WalletBalance';
import PaymentHistory from './PaymentHistory';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [payments, setPayments] = useState([[], []]);
  const [balance, setBalance] = useState(0);

  Promise.all([
    getPayments(),
    getBalance(),
  ])
  .then(([payments, balance]) => {
    setPayment(payments);
    setBalance(balance);
    setIsLoading(false);
  });

  return isLoading
    ? <Loading />
    : (
      <div>
        <PaymentHistory payments={payments} />
        <WalletBalance balance={balance} />
        <Search />
      </div>
    );
};

export default Dashboard;
