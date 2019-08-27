import React from 'react';

const PaymentHistory = ([recievedTransactions, sentTransactions]) => (
  <div>
    <p>Recieved Transactions</p>
    <ul>
      {recievedTransactions.map(payment => <Payment payment={payment} />)}
    </ul>

    <p>Sent Transactions</p>
    <ul>
      {sentTransactions.map(payment => <Payment payment={payment} />)}
    </ul>
  </div>
);

const Payment = ({
  id,
  to_wallet: { user: { username } },
  amount
}) => (
  <li>
    <p>ID: {id}</p>
    <p>Username: {username}</p>
    <p>Amount: ${amount}</p>
  </li>
);

export default PaymentHistory;
