import React, { useEffect, useState } from 'react';

export const Paginations = ({ res, setLink, setLoading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = res.results.length;
    const totalPages = Math.ceil(res.count / itemsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        setLink(`https://swapi.dev/api/people?page=${currentPage}`);
    }, [currentPage, setLink]);

    const renderPaginationNumbers = () => {
        const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

        let startPage, endPage;

        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            startPage = Math.max(1, currentPage - 2);
            endPage = Math.min(totalPages, currentPage + 2);
        }

        return (
            <>
                {currentPage > 1 && (
                    <span onClick={() => handlePageClick(currentPage - 1)}>{'<'}</span>
                )}
                {pageNumbers.slice(startPage - 1, endPage).map((pageNumber) => (
                    <span
                        key={pageNumber}
                        className={pageNumber === currentPage ? 'link-paginations__active' : ''}
                        onClick={() => handlePageClick(pageNumber)}
                    >
                        {pageNumber}
                    </span>
                ))}
                {currentPage < totalPages && (
                    <span onClick={() => handlePageClick(currentPage + 1)}>{'>'}</span>
                )}
            </>
        );
    };

    return <div className="link-paginations">{renderPaginationNumbers()}</div>;
};
