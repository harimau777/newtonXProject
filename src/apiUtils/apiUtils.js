import apiRoutes from './apiRoutes';

const login = (username, password) => {
  return fetch(
    apiRoutes.auth,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }
  );
};

const getWalletBalance = () => {
  return fetch(apiRoutes.wallet);
};

const getPaymentHistory = () => {
  return Promise.all([
    fetch(apiRoutes.recievedTransactions),
    fetch(apiRoutes.sentTransactions)
  ])
  .then(([recievedTransactions, sentTransactions]) => { recievedTransactions, sentTransactions });
};

const doSearch = searchString => {
  return fetch(`${apiRoutes.users}?search=${searchString}`);
};

const transferMoney = ({ id, transferAmount }) => {
  fetch(
    sendPaymentRoute,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, transferAmount }),
    }
  )
};
