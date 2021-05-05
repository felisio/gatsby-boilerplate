import { render, screen } from '@testing-library/react';
import React from 'react';
import Breadcrumb, { BreadcrumbProps, BreadcrumbPage } from './breadcrumb';

const createTestProps = (props: BreadcrumbProps) => ({
    ...props,
});

const homePage: BreadcrumbPage = { title: 'Home', link: '#home' };
const innovationPage: BreadcrumbPage = { title: 'Innovation', link: '#innovation' };

test('should display home with props', () => {
    const props = createTestProps({ dirStructure: [homePage] });

    render(<Breadcrumb {...props} />);
    expect(screen.getByText(homePage.title)).toHaveTextContent(homePage.title);
    expect(screen.getByTestId('link')).toHaveAttribute('href', homePage.link);
});

test('should display +home+/+innovation', () => {
    const props = createTestProps({ dirStructure: [homePage, innovationPage] });
    render(<Breadcrumb {...props} />);
    expect(screen.getByText(homePage.title)).toHaveTextContent(homePage.title);
    expect(screen.getByText(innovationPage.title)).toHaveTextContent(innovationPage.title);
    expect(screen.getByText(homePage.title)).toHaveAttribute('href', homePage.link);
    expect(screen.getByText(innovationPage.title)).toHaveAttribute('href', innovationPage.link);
});
