ImageGallery.js

jsx
import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <Image
          key={(link unavailable)}
          image={image}
          onClick={() => handleImageClick(image)}
        />
      ))}
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ImageGallery;

Image.js

jsx
import React from 'react';

const Image = ({ image, onClick }) => {
  return (
    <div className="image" onClick={onClick}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default Image;

Modal.js

jsx
import React from 'react';

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal">
      <img src={image.src} alt={image.alt} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;

