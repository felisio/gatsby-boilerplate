import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import Ctabanner, { CtabannerProps } from './ctabanner';

const createTestProps = (props: CtabannerProps) => ({
    ...props,
});

const ctaBannerProps = createTestProps({
    title: 'Ready to jump start your career?',
    subtitle: 'Start learning with Quantic.',
    buttonCta: 'Try a lesson',
    buttonDestination: 'http://quantic.edu',
});

test('should verify Ctabanner Component props', () => {
    render(<Ctabanner {...ctaBannerProps} />);

    expect(screen.getByRole('heading')).toHaveTextContent(ctaBannerProps.title);
    expect(screen.getByText(ctaBannerProps.subtitle)).toHaveTextContent(ctaBannerProps.subtitle);
    expect(screen.getByRole('link')).toHaveTextContent(ctaBannerProps.buttonCta);
    expect(screen.getByRole('link')).toHaveAttribute('href', ctaBannerProps.buttonDestination);
});

test('should verify Ctabanner Component snapshot', () => {
    const tree = renderer.create(<Ctabanner {...ctaBannerProps} />).toJSON();

    expect(tree).toMatchSnapshot();
});
