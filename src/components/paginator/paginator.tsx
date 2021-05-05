import React from 'react';
import { StyledPaginator } from './paginator.styles';

export type PaginatorProps = {
    handlePageChange: Function;
    pageCount: number;
    currentPage: number;
    visiblePages?: number;
};

export default function Paginator({ pageCount, currentPage, visiblePages = 4, handlePageChange }: PaginatorProps) {
    // returns empty component if argument is invalid
    if (pageCount < 1 || currentPage < 1 || visiblePages < 1 || currentPage > pageCount) {
        return <StyledPaginator />;
    }

    const fromCurrentToLast = pageCount - currentPage;
    const availableSlots = visiblePages - 1;

    // calculates min page to display
    let minPage = fromCurrentToLast < availableSlots ? pageCount - availableSlots : currentPage;
    minPage = minPage > 0 ? minPage : 1;

    // calculates max page to display
    const maxPage = minPage + availableSlots > pageCount ? pageCount : minPage + availableSlots;

    const pages = Array.from({ length: maxPage - minPage + 1 }).map((_, i) => {
        const page = minPage + i;
        return (
            <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={page === currentPage ? 'current' : ''}
            >
                {page.toString().padStart(2, '0')}
            </button>
        );
    });
    return (
        <StyledPaginator>
            <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                className={currentPage > 1 ? 'control' : 'control hide'}
            >
                BACK
            </button>
            {pages}
            <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                className={currentPage < pageCount ? 'control' : 'control hide'}
            >
                NEXT
            </button>
        </StyledPaginator>
    );
}
