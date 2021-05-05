import { render } from '@testing-library/react';
import React from 'react';
import { ComponentOrientation } from '../../utils/componentOrientation';
import Share, { ShareProps } from './share';

const createTestProps = (props: ShareProps) => ({
    ...props,
});

test('should verify Share Component props', () => {
    const props = createTestProps({
        title: 'This is the blog post title',
        url: 'https://quantic.edu',
        twitterHandle: 'QuanticSchool',
        emailIntro: "Check out this article on Quantic's Blog:",
        orientation: ComponentOrientation.vertical,
    });
    const { container } = render(<Share {...props} />);
    const mainDiv = container.children[0];
    expect(mainDiv).toHaveClass(props.orientation);
});
