import React, { useState } from 'react';
import Modal from '../components/Modal';

const MyPage = () => {
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <div>
      <button onClick={openModal}>显示弹窗</button>
      <Modal show={modalShow} onClose={closeModal}>
        <p>这是弹窗内容!</p>
      </Modal>
    </div>
  );
};

export default MyPage;
