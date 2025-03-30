import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
    return (
        <div className="shimmer-wrapper">
            {Array(10).fill("").map((_, index) => (
                <div key={index} className="shimmer-card"></div>
            ))}
        </div>
    );
};

export default Shimmer;