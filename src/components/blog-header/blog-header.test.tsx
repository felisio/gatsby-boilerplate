import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import BlogHeader, { BlogHeaderProps } from './blog-header';

const createTestProps = (props: BlogHeaderProps) => ({
    ...props,
});

test('should verify BlogHeader Component props', () => {
    const title = 'BlogHeader Component';
    const navText = 'Navbar component';
    const navbar = <div>{navText}</div>;
    const props = createTestProps({ title, navbar });

    render(<BlogHeader {...props} />);
    expect(screen.getByRole('heading')).toHaveTextContent(title);
    expect(screen.getByText(navText)).toHaveTextContent(navText);
});

test('should verify BlogHeader Component snapshot', () => {
    const title = 'BlogHeader Component';
    const navText = 'Navbar component';
    const navbar = <div>{navText}</div>;
    const props = createTestProps({ title, navbar });

    const tree = renderer.create(<BlogHeader {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
});
