import React, { useState } from 'react';

const getParams = () => {
  const params = new URLSearchParams(location.search)
  return {
    id: params.get('id'),
    username: params.get('username'),
    firstName: params.get('firstName'),
    lastName: params.get('lastName'),
  };
};

const UserDetails = () => {
  const { id, username, firstName, lastName } = getParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <p>Username: {username}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <button onClick={openModal}>
        Transfer Money
      </button>
      <Transfer id={id} username={username} isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};




export default UserDetails;
