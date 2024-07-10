
import "./style.css";
import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

export default function Stories() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="banner">
    <div className="image-container" onClick={showModal}>
      <img
        src="https://res.cloudinary.com/dehk1bcny/image/upload/v1720622234/mn67utwwnloahrlrjlbv.png"
        alt="Description of image"
        className="banner_img"
      />
      <div className="overlay">
        <div className="text">Click to open chatbox</div>
      </div>
    </div>
    <ModalComponent
      isVisible={isModalVisible}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  </div>
  );
}
