import { render, screen } from '@testing-library/react';
import React from 'react';
import CategoryCard, { CategoryCardProps } from './category-card';
import categoryCard from '../../../__mocks__/category-card';

const categoryCardData: CategoryCardProps = categoryCard;

const createTestProps = (props: CategoryCardProps) => ({
    ...props,
});

test('should verify CategoryCard Component props', () => {
    const props = createTestProps(categoryCardData);
    render(<CategoryCard {...props} />);

    expect(screen.getByTestId('description')).toHaveTextContent(categoryCardData.description);
    expect(screen.getByTestId('link')).toHaveAttribute('href', props.categoryLink);
    expect(screen.getByTestId('link')).toHaveTextContent(props.title);
});
