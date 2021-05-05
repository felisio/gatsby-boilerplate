import { useState } from 'react';

export type WpSearchResultPostProps = {
    ID: string;
    link?: string;
    title?: string;
    content?: string;
    description?: string;
    date?: string;
    category?: string;
    horizontalImageUri?: string;
    altText?: string;
};

export type WpSearchResultProps = {
    data: {
        customSearch: string;
    };
};

const POSTS_PER_PAGE = 9;
const ENDPOINT = process.env.GATSBY_BLOG_GRAPHQL_ENDPOINT || '';

export default function useSearch() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [totalPageCount, setTotalPageCount] = useState<number>(1);
    const [totalResultsCount, setTotalResultCount] = useState<number>(0);
    const [results, setResults] = useState<WpSearchResultPostProps[]>();

    const getSearch = (searchTerm: string, currentPage: number) => {
        setIsLoading(true);
        const wpSearchOpName = 'Search';
        const query = `query ${wpSearchOpName} {
            customSearch(search: "${searchTerm}")
        }`;

        fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                operationName: wpSearchOpName,
                variables: null,
            }),
        })
            .then(response => response.json())
            .then((resultData: WpSearchResultProps) => {
                if (resultData?.data?.customSearch) {
                    const wpSearchResults = JSON.parse(resultData.data.customSearch) as WpSearchResultPostProps[];
                    const pageCount = Math.ceil(wpSearchResults.length / POSTS_PER_PAGE);
                    const minPostIndex = (currentPage - 1) * POSTS_PER_PAGE;
                    const maxPostIndex = minPostIndex + POSTS_PER_PAGE;
                    const currentPageResults = wpSearchResults.filter(
                        (_, index) => index >= minPostIndex && index < maxPostIndex,
                    ) as WpSearchResultPostProps[];

                    setTotalResultCount(wpSearchResults.length);
                    setTotalPageCount(pageCount);
                    setResults(currentPageResults);
                    setIsLoading(false);
                }
            });
    };

    return {
        getSearch,
        isLoading,
        totalPageCount,
        totalResultsCount,
        results,
    };
}
