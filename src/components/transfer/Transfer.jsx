import React, { useState } from 'react';
import Modal from 'react-modal';

import Error from './Error';
import TransferForm from './TransferForm';
import { transferMoney } from '../../apiUtils';

const Transfer = (id, username, isOpen, closeModal) => {
  const [view, setIsView] = useState('transferForm');

  const transfer = transferAmount =>
    transferMoney(id, transferAmount)
    .then(
      () => setView('success'),
      () => setView('error')
    )
    .catch(() => setView('error'));

  const getView = () => {
    if (view === 'transferForm') {
      return <TransferForm username={username} transfer={transfer} />;
    } else if (view === 'error') {
      return <Error />
    } else if (view === 'success') {
      return <Success />
    } else {  // Default to error for now
      return <Error />;
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      {getView()}
    </Modal>
  )
};

export default Transfer;
