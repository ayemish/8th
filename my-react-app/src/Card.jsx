import React, { useState } from 'react';
import './Card.css';

const Card = ({ id, title, description, image, price }) => {
  const [isRolled, setIsRolled] = useState(true);

  const toggleRoll = () => {
    setIsRolled(!isRolled);
  };

  return (
    <div className="card-container">
      <div 
        className={`card ${isRolled ? 'rolled' : 'unrolled'}`}
        onClick={toggleRoll}
      >
        {/* Wooden Rod Top */}
        <div className={`wooden-rod top ${isRolled ? 'visible' : 'hidden'}`}>
          <div className="rod-end left"></div>
          <div className="rod-end right"></div>
        </div>

        {/* Wooden Rod Bottom */}
        <div className={`wooden-rod bottom ${isRolled ? 'visible' : 'hidden'}`}>
          <div className="rod-end left"></div>
          <div className="rod-end right"></div>
        </div>

        {/* Content */}
        <div className={`card-content ${isRolled ? 'hidden-content' : 'visible-content'}`}>
          <div className="content-border">
            <h3 className="card-title">{title}</h3>
            
            {/* Decorative line */}
            <div className="decorative-line">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="line"></div>
            </div>

            {/* Product Image */}
            {image && (
              <div className="image-container">
                <img src={image} alt={title} className="product-image" />
              </div>
            )}

            <p className="card-description">{description}</p>

            {/* Price */}
            {price && (
              <div className="price-container">
                <span className="price">${price}</span>
              </div>
            )}

            {/* Click hint */}
            <div className="click-hint">
              <p>Click to roll up</p>
            </div>
          </div>
        </div>

        {/* Rolled state hint */}
        {isRolled && (
          <div className="rolled-hint">
            <p>click here love</p>
          </div>
        )}

        {/* Aged paper texture overlay */}
        <div className={`paper-texture ${isRolled ? 'rolled-texture' : 'unrolled-texture'}`}></div>
      </div>

      {/* Shadow */}
      <div className={`card-shadow ${isRolled ? 'rolled-shadow' : 'unrolled-shadow'}`}></div>
    </div>
  );
};

export default Card;