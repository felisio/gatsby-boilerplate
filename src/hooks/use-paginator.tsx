export default function usePaginator() {
    const getPreviousPage = (currentPage: number) => {
        const prevPage = currentPage - 1;
        if (prevPage >= 1) {
            return prevPage > 1 ? prevPage : null;
        }
        return null;
    };

    const getNextPage = (currentPage: number, totalPageCount: number) => {
        if (currentPage === totalPageCount) {
            return null;
        }

        if (currentPage < totalPageCount) {
            return currentPage + 1;
        }

        return null;
    };

    return {
        getPreviousPage,
        getNextPage,
    };
}
