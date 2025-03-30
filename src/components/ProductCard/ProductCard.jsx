import React, { useState } from 'react';
import './ProductCard.css'

export const ProductCard = ({ image, title }) => {
    const [isLoading, setIsLoading]=useState(true);

 return (
        <div className="product-card">
            <div className="image-container">
                {isLoading && <div className="image-loader shimmer"></div>}

                <img
                    src={image}
                    alt={title}
                    className={`product-img ${isLoading ? "hidden" : ""}`}
                    onLoad={() => setIsLoading(false)}
                />
            </div>
            <h3>{title}</h3>
        </div>
    );
}