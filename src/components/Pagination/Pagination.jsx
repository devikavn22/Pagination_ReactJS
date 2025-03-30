
import React, { useEffect, useState } from 'react';
import './Pagination.css';
import { ProductCard } from '../ProductCard/ProductCard';
import { PaginationContainer } from '../PaginationContainer/PaginationContainer';
// import { fetchData } from '../../api/fetchData';
import Shimmer from '../ShimmerComponent/ShimmerComponent';
import { useFetch } from '../../hooks/useFetch';
import { API_URL, PAGE_SIZE } from './Pagination.constants';


const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const {data:products,loading,error}=useFetch(API_URL) // Custom Hook Implementation


    const totalProducts = products.length;
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    const handlePageChange = (n) => {
        setCurrentPage(n)
    };

    const goToNextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1)
    }

    const goToPrevPage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
    };

    // if(loading) return(<Shimmer />);
    // if(error) return(<h2>Something Went Wrong, Please Try Again</h2>)
    if (loading) return <Shimmer />;
    if (error) return <h2>Something Went Wrong, Please Try Again</h2>;
    if (!products.length) return <>Products Not Found</>;

    return (
    // !products.length ? <>Products Not Found</> :
     

        <div className='Pagination'>
            <h1>Pagination Container</h1>

            <PaginationContainer
                noOfPages={noOfPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                goToNextPage={goToNextPage}
                goToPrevPage={goToPrevPage} />

            <div className='products-container'>
                {products.slice(startIndex, endIndex).map((product) => (
                    <ProductCard key={product.id} image={product.images[0]} title={product.title} />
                ))}
            </div>

        </div>
    )
}

export default Pagination