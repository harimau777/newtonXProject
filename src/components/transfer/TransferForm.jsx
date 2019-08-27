import React, { useState } from 'react';

const TransferForm = (userName, transfer) => {
  const [transferAmount, setTransferAmount] = useState(0);

  const handleTransferAmountChange = ({ target: { value } }) => setTransferAmount(value);

  const handleTransferClick = () => transfer(transferAmount);

  return (
    <>
      <p>
        Transfer $
        <input
          type="number"
          value={transferAmount}
          onChange={handleTransferAmountChange}
        />
         to {userName}
      </p>
      <button onClick={handleTransferClick}>
        Transfer
      </button>
    </>
  );
};

export default TransferForm;
