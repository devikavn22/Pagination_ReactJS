import React from 'react';
import './PaginationContainer.css';

export const PaginationContainer = ({noOfPages,currentPage,
    handlePageChange,
    goToNextPage,
    goToPrevPage}) => {
    return (
        <div className='pagination-container'>
            <button className='page-number' disabled={currentPage === 0} onClick={() => goToPrevPage()}>⬅️</button>
            {[...Array(noOfPages).keys()].map((n) => (
                <button key={n} className={'page-number' + (currentPage === n ? "active" : "")} onClick={() => handlePageChange(n)} >{n+1}</button>
            ))}
            <button className='page-number' disabled={currentPage === noOfPages - 1} onClick={() => goToNextPage()}>➡️ </button>
        </div>
    )
}


