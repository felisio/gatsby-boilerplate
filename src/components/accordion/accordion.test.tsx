import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Heading from '../heading/heading';
import Accordion, { AccordionProps } from './accordion';

const createTestProps = (props: AccordionProps) => ({
    ...props,
});

const section1Props = {
    title: 'Section with headlines',
    content: (
        <div>
            <Heading tag="h1">This is an H1 element.</Heading>
            <Heading tag="h2">This is an H2 element.</Heading>
            <Heading tag="h3">This is an H3 element.</Heading>
            <Heading tag="h4">This is an H4 element.</Heading>
        </div>
    ),
};

const section2Props = {
    title: 'Section 2',
    content: (
        <div>
            <Heading tag="h1">This is an H1 element.</Heading>
            <Heading tag="h2">This is an H2 element.</Heading>
            <Heading tag="h3">This is an H3 element.</Heading>
            <Heading tag="h4">This is an H4 element.</Heading>
        </div>
    ),
};

test('Section should open and close when accordion button is pressed', () => {
    const testProps = createTestProps({
        sections: [section1Props],
    });
    render(<Accordion {...testProps} />);
    const button = screen.getByTestId('accordion-button');
    expect(screen.getByTestId('content-container')).toHaveClass('closed');
    fireEvent.click(button);
    expect(screen.getByTestId('content-container')).toHaveClass('open');
    fireEvent.click(button);
    expect(screen.getByTestId('content-container')).toHaveClass('closed');
});

test('Section should be open if default', () => {
    const testProps = createTestProps({
        sections: [section1Props],
        defaultOpenSectionTitle: 'Section with headlines',
    });
    render(<Accordion {...testProps} />);
    expect(screen.getByTestId('content-container')).toHaveClass('open');
});

test('Section should open and close the opened section', () => {
    const testProps = createTestProps({
        sections: [section1Props, section2Props],
        defaultOpenSectionTitle: 'Section with headlines',
    });
    render(<Accordion {...testProps} />);
    const containers = screen.getAllByTestId('content-container');
    const buttons = screen.getAllByTestId('accordion-button');
    expect(containers[0]).toHaveClass('open');
    fireEvent.click(buttons[1]);
    expect(containers[0]).toHaveClass('closed');
    expect(containers[1]).toHaveClass('open');
});
